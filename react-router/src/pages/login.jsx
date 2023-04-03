import { useLocation, useNavigate } from 'react-router-dom'
import { Signin } from '../components'
import { Container } from '../components/ui/Container'
import { useAuth } from '../context/Auth'

const Login = () => {
	const { signin } = useAuth()
	const location = useLocation()
	const navigate = useNavigate()

	const handleLogin = () => {
		navigate(location.state?.from || '/')
	}

	return (
		<Container>
			<Signin onSubmit={(value) => signin(value.username, handleLogin)} />
		</Container>
	)
}

export default Login
