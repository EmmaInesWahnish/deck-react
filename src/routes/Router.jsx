import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import '../App.css';
import Login from '../authentication/Login.jsx';
import Home from '../components/Home.jsx'
import Datasources from '../components/Datasources.jsx'
import Implementations from '../components/Implementations.jsx'
import ConversionTracking from '../components/ConversionTracking.jsx'
import Segments from '../components/Segments.jsx'
import Retargeting from '../components/Retargeting.jsx'
import Componente404 from '../components/Componente404.jsx';
import Banners from '../components/Banners.jsx'
import Dco from '../components/Dco.jsx'
import GlobalOperations from '../components/GlobalOperations.jsx'
import TagsExport from '../components/TagsExport.jsx'
import BannerPresentations from '../components/BannerPresentations.jsx'
import MediaManager from '../components/MediaManager.jsx'
import Trackers from '../components/Trackers.jsx';
import AuthContextProvider from '../context/AuthContextProvider.jsx';
import Layout from '../layout/Layout.jsx';
import Widget from '../widget/Widget.jsx';
import Exit from '../exit/Exit.jsx';

const ThemeRoutes = () => {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Layout>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route path='/authentication' element={<Login />} />
						<Route path='/who' element={<Widget />} />
						<Route path='/logout' element={<Exit />} />
						<Route path='/notFound' element={<Componente404 />} />
						<Route path='/*' element={<Navigate to='/' />} />
						<Route path='/home' element={<Login />} />
						<Route path='/implementations/' element={<Implementations />} />
						<Route path='/implementations/datasources' element={<Datasources />} />
						<Route path='/implementations/ctracking' element={<ConversionTracking />} />
						<Route path='/implementations/retargeting' element={<Retargeting />} />
						<Route path='/implementations/segments' element={<Segments />} />
						<Route path='/banners/' element={<Banners />} />
						<Route path='/banners/dco' element={<Dco />} />
						<Route path='/banners/trackers' element={<Trackers />} />
						<Route path='/banners/bannerpresentations' element={<BannerPresentations />} />
						<Route path='/banners/mediamanager' element={<MediaManager />} />
						<Route path='/banners/tagsexport' element={<TagsExport />} />
						<Route path='/banners/globaloperations' element={<GlobalOperations />} />
					</Routes>
				</Layout>
				<Outlet />
			</AuthContextProvider>
		</BrowserRouter>
	);
};
export default ThemeRoutes;
