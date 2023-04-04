import { NavLink, useParams } from 'react-router-dom'
import { Layout, Menu } from 'antd'

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
		<Header className='header'>
			<Menu
				theme='dark'
				mode='horizontal'
				defaultSelectedKeys={category || 'home'}
				items={menuItems}
			/>
		</Header>
	)
}

export default AppHeader
