import { NavLink, useParams } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import UserPanel from './UserPanel'

const { Header } = Layout

const menuItems = [
	{
		key: 'home',
		label: <NavLink to='/'>Home</NavLink>,
	},
	{
		key: 'characters',
		label: <NavLink to='/category/characters'>Characters</NavLink>,
	},
	{
		key: 'episode',
		label: <NavLink to='/category/episode'>Episode</NavLink>,
	},
	{
		key: 'location',
		label: <NavLink to='/category/location'>Location</NavLink>,
	},
]

const AppHeader = () => {
	const { category } = useParams()
	return (
		<Header
			style={{
				position: 'sticky',
				top: 0,
				zIndex: 1,
				width: '100%',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}>
			<Menu
				theme='dark'
				mode='horizontal'
				defaultSelectedKeys={category || 'home'}
				items={menuItems}
			/>
			<UserPanel />
		</Header>
	)
}

export default AppHeader
