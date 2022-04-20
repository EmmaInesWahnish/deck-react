import '../App.css';
import { useAuthContext } from "../context/AuthContextProvider.jsx"

const Exit = () => {
	const { logout } = useAuthContext();
	logout();
	return (
		<></>)
}

export default Exit;
