import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import '../App.css';
import TopNavBar from '../navigation/TopNavBar.jsx';
import Login from '../authentication/Login.jsx';
import Componente404 from '../components/Componente404.jsx';
import AuthContextProvider from '../context/AuthContextProvider.jsx';

const ThemeRoutes = () => {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<header>
					<div className="asBody">
						<div className="bg-light">
							<TopNavBar />
						</div>
					</div>
				</header>
				<Routes>
					<Route
						path="/"
						element={<Login />}
					/>
					<Route path='/authentication' element={<Login />} />
					<Route path='/notFound' element={<Componente404 />} />
					<Route path='/*' element={<Navigate to='/' />} />
				</Routes>
				<Outlet />
			</AuthContextProvider>
		</BrowserRouter>
	);
};
export default ThemeRoutes;
