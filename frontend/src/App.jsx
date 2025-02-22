import { Route, Routes } from 'react-router';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp/SignUp';
import './App.css';

function App() {
	return (
		<>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
