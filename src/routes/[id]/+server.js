// @ts-ignore
import * as db from "$lib/server/database";
import { error, redirect } from "@sveltejs/kit";

// @ts-ignore

/** @type {import("./$types").RequestHandler} */
export function GET({ params }) {
  const { id } = params;
  const link = db.findLink(id);
  if (!link) {
    throw error(404, "Not found");
  }

  throw redirect(303, link.url);
}