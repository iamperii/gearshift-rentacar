import { Route, Routes } from 'react-router';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import UserLayout from './layouts/UserLayout';
import HomePage from './pages/HomePage';
import './App.css';
import OurFleet from './pages/OurFleet/OurFleet';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ForgotPassword from './pages/ForgotPassword';
import CarDetails from './pages/CarDetails/CarDetails';

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />

				<Route element={<UserLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/our-fleet" element={<OurFleet />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="/cars/:name" element={<CarDetails />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
