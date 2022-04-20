import img2 from "../assets/login-background.png";
import { useAuthContext } from "../context/AuthContextProvider";
import {Card} from 'react-bootstrap';
import GoogleImage from "../assets/IOS_Google_icon.png"
const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "top right",
	objectFit: 'contain'
};

const Login = () => {

	const { setRegisterEmail, setRegisterPassword, setLoginEmail, setLoginPassword, register, login, loginGoogle } = useAuthContext();

	return (
		<div
			style={sidebarBackground}
		>
			<Card className="m-3 p-2 lessWidth">
				<div>
					<h3>Register</h3>
					<h3>(email & password)</h3>
				</div>
				<div className="p-2">
					<input placeholder="email..." onChange={(event) => { setRegisterEmail(event.target.value) }} />
				</div>
				<div className="p-2">
					<input placeholder="password..." onChange={(event) => { setRegisterPassword(event.target.value) }} />
				</div>
				<div className="p-2">
					<button className="btn btn-success" onClick={register}>Create User</button>
				</div>
				<div>
					<h3>Sign in</h3>
					<h3>(email & password)</h3>
				</div>
				<div className="p-2">
					<input placeholder="email..." onChange={(event) => { setLoginEmail(event.target.value) }} />
				</div>
				<div className="p-2">
					<input placeholder="password..." onChange={(event) => { setLoginPassword(event.target.value) }} />
				</div>
				<div className="p-2">
					<button className="btn btn-primary" onClick={login}>Sign in</button>
				</div>
				<div>
					<h3>Sign in</h3>
					<h3>(Google)</h3>
				</div>
				<div className="p-2">
					<button className="btn btn-light" onClick={loginGoogle}><img id="myImg" src={GoogleImage} alt="Google Logo" width="50" height="auto"/></button>
				</div>
			</Card>
		</div>
	);
};

export default Login;
