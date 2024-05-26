"use server";

import bcrpyt from "bcrypt";
import { eq } from "drizzle-orm";
import { createSafeActionClient } from "next-safe-action";

import { RegisterSchema } from "@/lib/validations/register-schema";

import { sendVerificationEmail } from "./email";
import { generateEmailVerificationToken } from "./token";
import { db } from "..";
import { users } from "../schema";

const action = createSafeActionClient();

export const emailRegister = action(
  RegisterSchema,
  async ({ email, name, password }) => {
    const hashedPassword = await bcrpyt.hash(password, 10);

    // Check existing user
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      if (!existingUser.emailVerified) {
        const verificationToken = await generateEmailVerificationToken(email);
        await sendVerificationEmail(
          verificationToken[0].email,
          verificationToken[0].token,
        );

        return { success: "Email Confirmation resent" };
      }
      return { error: "Email already in use" };
    }

    // Logic for when the user is not registered
    await db.insert(users).values({
      email,
      name,
      password: hashedPassword,
    });

    const verificationToken = await generateEmailVerificationToken(email);

    await sendVerificationEmail(
      verificationToken[0].email,
      verificationToken[0].token,
    );

    return { success: "Email Confirmation Sent!" };
  },
);
