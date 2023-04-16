import { useState } from 'react'
import { useContext } from 'react'
import { createContext } from 'react'

const Auth = createContext()
const USERNAME = 'username'

export function useAuth() {
	return useContext(Auth)
}

export function AuthProvider({ children }) {
	const [user, setUser] = useState(localStorage.getItem(USERNAME) || '')

	const signin = (username, callback) => {
		localStorage.setItem(USERNAME, username)
		setUser(username)
		callback()
	}

	const signout = () => {
		localStorage.removeItem(USERNAME)
		setUser('')
	}

	return (
		<Auth.Provider value={{ user, signin, signout }}>
			{children}
		</Auth.Provider>
	)
}
