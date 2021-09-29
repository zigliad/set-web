// Return all possible ways to choose k elements from
// array, returns allowed, order matters.
export function getKs<T>(arr: T[], k: number) {
	if (k === 1) {
		return arr.map((x) => [x]);
	}

	let Ks: T[][][] = [];
	for (let i = 0; i < arr.length; i++) {
		Ks.push(getKs(arr, k - 1));
		for (let j = 0; j < Ks[i].length; j++) {
			Ks[i][j].push(arr[i]);
		}
	}

	let result: T[][] = [];
	Ks.forEach((x) => {
		result.push(...x);
	});
	return result;
}
