import { type DefaultSession } from "next-auth";

export type ExtendUser = DefaultSession["user"] & {
  id: string;
  role: string;
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
  image: string;
};

declare module "next-auth" {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  interface Session {
    user: ExtendUser;
  }
}
