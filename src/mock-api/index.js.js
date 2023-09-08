import data from './table.json';

export default async function mockApi() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data);
		}, 1000)
	});
}