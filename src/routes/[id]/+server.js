import * as linkService from "$lib/server/linkService";
import { error, redirect } from "@sveltejs/kit";

/** @type {import("./$types").RequestHandler} */
export async function GET({ params }) {
  const { id } = params;
  const link = await linkService.findIncrementingVisits(id);
  if (!link) {
    throw error(404, "Not found");
  }

  throw redirect(303, link.url);
}