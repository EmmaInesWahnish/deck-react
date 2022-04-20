import '../App.css';
import { Navigate } from 'react-router-dom'
import { useAuthContext } from "../context/AuthContextProvider.jsx"

const Exit = () => {
	const { logout } = useAuthContext();
	logout();
	return (
			<Navigate to='/authentication' />
			)
}

export default Exit;
