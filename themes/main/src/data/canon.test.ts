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
