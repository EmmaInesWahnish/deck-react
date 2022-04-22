import img2 from "../assets/login-background.png";
import { useAuthContext } from "../context/AuthContextProvider";
import { Card } from 'react-bootstrap';
import GoogleImage from "../assets/IOS_Google_icon.png"

const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "top right",
	objectFit: 'contain'
};

const Login = () => {

	const {
		setRegisterEmail,
		setRegisterPassword,
		setLoginEmail,
		setLoginPassword,
		setResetEmail,
		forgotPassword,
		register,
		login,
		loginGoogle,
		user
	} = useAuthContext();

	return (
		<div
			style={sidebarBackground}
		>
			<Card className="cardWidth">
				<div className="center p-2">
					<h3>Register (email & password)</h3>
				</div>
				<div className="center p-2">
					<input className="formWidth" placeholder="email..." onChange={(event) => { setRegisterEmail(event.target.value) }} />
				</div>
				<div className="center p-2">
					<input type="password" className="formWidth" placeholder="password..." onChange={(event) => { setRegisterPassword(event.target.value) }} />
				</div>
				<div className="center p-2">
					<button className="btn btn-success formWidth" disabled={user} onClick={register}>Create User</button>
				</div>
				<div className="center p-2">
					<h3>Sign in (email & password)</h3>
				</div>
				<div className="p-2 center">
					<input className="formWidth" placeholder="email..." onChange={(event) => { setLoginEmail(event.target.value) }} />
				</div>
				<div className="p-2 center">
					<input type="password" className="formWidth" placeholder="password..." onChange={(event) => { setLoginPassword(event.target.value) }} />
				</div>
				<div className="p-2 center">
					<button className="btn btn-primary formWidth" disabled={user} onClick={login}>Sign in</button>
				</div>
				<div className="center p-2">
					<h3>Reset password</h3>
				</div>
				<div className="center p-2">
					<input className="formWidth" placeholder="email..." onChange={(event) => { setResetEmail(event.target.value) }} />
				</div>
				<div className="center p-2">
					<button className="btn btn-secondary formWidth" disabled={user} onClick={forgotPassword}>Reset Password</button>
				</div>
				<div className="center p-2">
					<h3>Sign in with Google</h3>
				</div>
				<div className="center p-2">
					<button className="btn btn-light formWidth" disabled ={user} onClick={loginGoogle}><img id="myImg" src={GoogleImage} alt="Google Logo" width="50" height="auto" /></button>
				</div>
			</Card>
		</div>
	);
};

export default Login;
