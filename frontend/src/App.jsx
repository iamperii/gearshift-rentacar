import { Route, Routes } from 'react-router';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import UserLayout from './layouts/UserLayout/UserLayout';
import HomePage from './pages/HomePage';
import './App.css';
import OurFleet from './pages/OurFleet';
import About from './pages/About/About';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './pages/ForgotPassword';

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />

				<Route
					element={
						<ProtectedRoute>
							<UserLayout />
						</ProtectedRoute>
					}
				>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/our-fleet" element={<OurFleet />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
