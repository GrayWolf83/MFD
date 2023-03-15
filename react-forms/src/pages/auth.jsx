import { useState } from 'react'
import { Signin, Signup } from '../components'

const Auth = () => {
	const [isSignin, setAuthForm] = useState(true)

	const handleSigninSubmit = (data) => {
		console.log('signin', data)
	}

	const handleSignupSubmit = (data) => {
		console.log('signup', data)
	}

	return isSignin ? (
		<Signin onChangeAuthForm={setAuthForm} onSubmit={handleSigninSubmit} />
	) : (
		<Signup onChangeAuthForm={setAuthForm} onSubmit={handleSignupSubmit} />
	)
}

export default Auth
