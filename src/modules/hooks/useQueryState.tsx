import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

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
	const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()

	const [state, setState] = useState<T>(GetDefault(stateKey, defaultValue))
	const isNewSession = useRef(true)
	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)

			return params.toString()
		},
		[searchParams],
	)

	useEffect(() => {
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

		router.push(
			pathname + '?' + createQueryString(stateKey, JSON.stringify(state)),
			{
				scroll: false,
			},
		)
	}, [state, stateKey, createQueryString, pathname, router, searchParams])

	return [state, setState]
}
