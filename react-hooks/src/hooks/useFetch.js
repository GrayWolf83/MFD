import { useState } from 'react'

export function useFetch(url) {
	const [data, setData] = useState()
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	async function refetch(props) {
		setIsLoading(true)
		setError(null)
		let urlParams = url
		if (props && props?.params) {
			urlParams += '?'
			Object.keys(props.params).forEach((key) => {
				urlParams += `${key}=${props.params[key]}&`
			})
		}

		await fetch(urlParams)
			.then((res) => res.json())
			.then((loadedData) => setData(loadedData))
			.catch((error) => setError(error))
			.finally(() => {
				setIsLoading(false)
			})
	}

	return { data, isLoading, error, refetch }
}
