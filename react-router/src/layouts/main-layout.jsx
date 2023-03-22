import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import { Header } from '../components'

const { Content } = Layout

const MainLayout = () => {
	return (
		<Layout>
			<Header />
			<Layout style={{ padding: '0 24px 24px' }}>
				<Content
					style={{
						padding: 24,
						margin: 0,
						minHeight: 'calc(100vh - 88px)',
						background: '#bae0ff',
					}}>
					<Outlet />
				</Content>
			</Layout>
		</Layout>
	)
}

export default MainLayout
