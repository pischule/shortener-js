import type { PageServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

import prisma from '$lib/server/prisma';
import { page } from '$app/stores';

export const load = (async (event) => {
	const session = await event.locals.getSession();
	const id = session?.user?.id;
	if (!id) throw redirect(303, '/');

	const currentPage = parseInt(event.url.searchParams.get('page') ?? '0');
	if (isNaN(currentPage) || currentPage < 0) {
		throw error(404, 'Bad page number');
	}
	const pageSize = 20;

	const links = await prisma.link.findMany({
		where: {
			creator: id
		},
		skip: pageSize * currentPage,
		take: pageSize
	});

	const totalCount = await prisma.link.count({
		where: {
			creator: id
		}
	});

	const totalPages = Math.ceil(totalCount / pageSize);

	return { currentPage, links, totalPages };
}) satisfies PageServerLoad;