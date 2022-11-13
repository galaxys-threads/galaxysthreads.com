import Canon from './canon'

test('Confirm no duplicate timelines', () => {
	let foundThings = [] as number[]
	for (const entry of Canon) {
		if (foundThings.includes(entry.timeline)) {
			throw `Duplicate Timeline on: ${entry.name}`
		}

		foundThings.push(entry.timeline)
	}
})

test('Confirm no duplicate release dates', () => {
	let foundThings = [] as Date[]
	for (const entry of Canon) {
		if (!entry.released) {
			continue
		}

		if (foundThings.includes(entry.released)) {
			throw `Duplicate released on: ${entry.name}`
		}

		foundThings.push(entry.released)
	}
})

test('Confirm no duplicate names', () => {
	let foundThings = [] as string[]
	for (const entry of Canon) {
		const key = `${entry.name} ${entry.type}`

		if (foundThings.includes(key)) {
			throw `Duplicate released on: ${key}`
		}

		foundThings.push(key)
	}
})
