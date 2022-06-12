import Canon from './canon';

test('Confirm no duplicate timelines', () => {
	let foundTimelines = [] as number[];
	for (const entry of Canon) {
		if (foundTimelines.includes(entry.timeline)) {
			throw `Duplicate Timeline on: ${entry.name}`;
		}

		foundTimelines.push(entry.timeline);
	}
});

test('Confirm no duplicate release dates', () => {
	let foundReleases = [] as Date[];
	for (const entry of Canon) {
		if (!entry.released) {
			continue;
		}

		if (foundReleases.includes(entry.released)) {
			throw `Duplicate released on: ${entry.name}`;
		}

		foundReleases.push(entry.released);
	}
});
