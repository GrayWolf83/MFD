import { Link } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const UserPanel = () => {
	const { user, signout } = useAuth()

	return (
		<div style={{ color: '#fff' }}>
			{user ? (
				<div>
					<p>
						{user}{' '}
						<span
							onClick={signout}
							style={{
								color: '#1677ff',
								textDecoration: 'none',
								outline: 'none',
								cursor: 'pointer',
								transition: 'color 0.3s',
							}}>
							Выйти
						</span>
					</p>
				</div>
			) : (
				<Link to='/login'>Войти</Link>
			)}
		</div>
	)
}

export default UserPanel
