import { useCallback, useEffect, useRef, useState } from "react"

function GetDefault<T>(stateKey: string, defaultValue: T): T {
	const searchParams = new URLSearchParams(window.location.search)
	const currentState = JSON.parse(
		searchParams.get(stateKey) as string,
	) as null | T
	if (!currentState) {
		return defaultValue
	}

	return currentState
}

export function useQueryState<T>(
	stateKey: string,
	defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {

	const [state, setState] = useState<T>(GetDefault(stateKey, defaultValue))
	const isNewSession = useRef(true)

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(window.location.search)
			params.set(name, value)

			return params.toString()
		},
		[],
	)

	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search)

		if (isNewSession.current) {

			const currentState = JSON.parse(
				searchParams.get(stateKey) as string,
			) as null | T
			if (currentState) {
				setState(currentState)
			}
			isNewSession.current = false
			return
		}

		const newRelativePathQuery = `${window.location.pathname}?${createQueryString(stateKey, JSON.stringify(state))}`
		history.pushState(null, '', newRelativePathQuery);

	}, [state, createQueryString])

	return [state, setState]
}
