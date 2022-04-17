import img2 from "../assets/login-background.png";
import { useAuthContext } from "../context/AuthContextProvider";
import Card from 'react-bootstrap';

const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "top right",
	objectFit: 'contain'
};

const Login = () => {

	const { setRegisterEmail, setRegisterPassword, setLoginEmail, setLoginPassword, register, login, logout, user } = useAuthContext();

	return (
		<div>
			<div
				style={sidebarBackground}
			>
				<div className="m-5">
					<div>
						<h3>Register with email and password</h3>
					</div>
					<div className="d-flex">
						<input placeholder="email..." onChange={(event) => { setRegisterEmail(event.target.value) }} />
						<input placeholder="password..." onChange={(event) => { setRegisterPassword(event.target.value) }} />
						<button className="btn btn-success" onClick={register}>Create User</button>
					</div>
				</div>
				<div className="m-5">
					<div>
						<h3>Login with email and password</h3>
					</div>
					<div className="d-flex">
						<input placeholder="email..." onChange={(event) => { setLoginEmail(event.target.value) }} />
						<input placeholder="password..." onChange={(event) => { setLoginPassword(event.target.value) }} />
						<button className="btn btn-light" onClick={login}>Login</button>
					</div>
				</div>
				<div className="m-5">
					<div>
						<h3>User logged in</h3>
						{user?.email}
					</div>
				</div>
				<div className="m-5">
					<div>
						<h3>Logout</h3>
					</div>
					<div className="d-flex">
						<button className="btn btn-secondary" onClick={logout}>Sign out</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
