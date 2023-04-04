import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/main-layout'
import { Home, Category, Detail } from './pages'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path='category/:category' element={<Category />} />
				<Route path='detail/:category/:id' element={<Detail />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	)
}

export default App
