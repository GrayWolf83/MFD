import { useState } from 'react'
import { Signin } from '../components/Signin'
import { Signup } from '../components/Signup'
import Container from '../components/ui/Container/Container'

const Auth = () => {
	const [isSignin, setAuthForm] = useState(true)

	const handleSigninSubmit = (data) => {
		console.log('signin', data)
	}

	const handleSignupSubmit = (data) => {
		console.log('signup', data)
	}

	return (
		<Container>
			{isSignin ? (
				<Signin
					onChangeAuthForm={setAuthForm}
					onSubmit={handleSigninSubmit}
				/>
			) : (
				<Signup
					onChangeAuthForm={setAuthForm}
					onSubmit={handleSignupSubmit}
				/>
			)}
		</Container>
	)
}

export default Auth
