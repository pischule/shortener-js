import { SvelteKitAuth } from "@auth/sveltekit";
import GitHub from "@auth/core/providers/github";
import { env } from "$env/dynamic/private";
import type { Handle } from "@sveltejs/kit";
import logo from "$lib/assets/logo.svg";

const { AUTH_SECRET, GITHUB_ID, GITHUB_SECRET } = env;

export const handle = SvelteKitAuth({
  providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
  secret: AUTH_SECRET,
  trustHost: true,
  theme: {
    brandColor: "hsl(195, 85%, 41%)",
    logo: logo
  }
}) satisfies Handle;
