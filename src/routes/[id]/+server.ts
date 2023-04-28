import * as linkService from "$lib/server/linkService";
import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (async ({ params }) => {
  const { id } = params;
  const link = await linkService.findIncrementingVisits(id);
  if (!link) {
    throw error(404, "Not found");
  }

  throw redirect(303, link.url);
}) satisfies RequestHandler;