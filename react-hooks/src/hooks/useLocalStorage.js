import { useState } from 'react'

export function useLocalStorage(name) {
	const [token, setToken] = useState(JSON.parse(localStorage.getItem(name)))

	function setItem(value) {
		localStorage.setItem(name, JSON.stringify(value))
		setToken(value)
	}

	function removeItem() {
		localStorage.removeItem(name)
		setToken('')
	}

	return [token, { setItem, removeItem }]
}
