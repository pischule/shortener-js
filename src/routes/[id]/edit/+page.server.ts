import type { Actions, PageServerLoad } from './$types';
import * as linkService from '$lib/server/linkService';
import { error, fail, redirect } from '@sveltejs/kit';
import { isUrlValid } from '$lib/util';
import prisma from '$lib/server/prisma';

export const load = (async ({ params, locals }) => {
	const session = await locals.getSession();
	const userId = session?.user?.id;
	if (!userId) {
		throw error(401, 'Unauthorized');
	}
	const linkId = params.id;
	const link = await linkService.findLink(linkId);
	if (!link) {
		throw error(404, 'Not found');
	}
	if (link.creator !== userId) {
		throw error(403, 'You dont own this link');
	}
	return {
		url: link.url,
		id: link.id
	};
}) satisfies PageServerLoad;

export const actions = ({
	delete: async ({ locals, params }) => {
		const linkId = params.id;
		const session = await locals.getSession();
		const userId = session?.user?.id;
		if (!userId) {
			throw error(401, 'Unauthorized');
		}

		await prisma.link.deleteMany({
			where: {
				id: linkId,
				creator: userId
			}
		});
		throw redirect(303, '/my-links');
	},
	update: async ({ request, locals, params }) => {
		const linkId = params.id;
		const session = await locals.getSession();
		const userId = session?.user?.id;
		if (!userId) {
			throw error(401, 'Unauthorized');
		}

		const data = await request.formData();
		const url = data.get('url');
		if (typeof url !== 'string' || !isUrlValid(url)) {
			return fail(400, { url, invalid: true });
		}

		await prisma.link.updateMany({
			where: {
				id: linkId,
				creator: userId
			},
			data: { url }
		});

		throw redirect(303, 'view');
	}
}) satisfies Actions;