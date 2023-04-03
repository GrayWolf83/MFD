import { Routes, Route, Navigate } from 'react-router-dom'
import RequiredAuth from './components/RequiredAuth'
import { AuthProvider } from './context/Auth'
import MainLayout from './layouts/main-layout'
import { Home, Category, Detail, Login } from './pages'

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route
						path='category/:category'
						element={
							<RequiredAuth>
								<Category />
							</RequiredAuth>
						}
					/>
					<Route
						path='detail/:category/:id'
						element={
							<RequiredAuth>
								<Detail />
							</RequiredAuth>
						}
					/>
				</Route>
				<Route path='/login' element={<Login />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</AuthProvider>
	)
}

export default App
