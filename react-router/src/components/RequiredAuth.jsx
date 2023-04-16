import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const RequiredAuth = ({ children }) => {
	const { user } = useAuth()
	const location = useLocation()

	if (!user) {
		return (
			<Navigate to='/login' state={{ from: location.pathname }} replace />
		)
	}

	return children
}

export default RequiredAuth
