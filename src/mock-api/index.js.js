import data from './table.json';

export default async function mockApi(currentIndex = 0, size = 5) {
	const pageEndIndex = currentIndex + size;
	const hasMorePages = pageEndIndex < data.table.length;

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				table: data.table.slice(currentIndex, pageEndIndex),
				hasMorePages,
			})
		}, 1000)
	});
}