export function isUrlValid(url: string) {
	if (!url) {
		return false;
	}
	try {
		new URL(url);
	} catch (_) {
		return false;
	}
	return true;
}