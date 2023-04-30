import type { DefaultSession } from "@auth/core/types";

declare module "../node_modules/.pnpm/@auth+core@0.5.1/node_modules/@auth/core/types.js" {
  interface Session {
    user: {
      id: string | undefined;
    } & DefaultSession["user"];
  }
}

declare module "../node_modules/.pnpm/@auth+core@0.5.1/node_modules/@auth/core/jwt.js" {
  interface JWT {
    provider: string;
  }
}