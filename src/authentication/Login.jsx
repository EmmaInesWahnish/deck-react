import img2 from "../assets/login-background.png";
import { useAuthContext } from "../context/AuthContextProvider";

const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "top right",
	objectFit: 'contain'
};

const Login = () => {

	const { setRegisterEmail, setRegisterPassword, setLoginEmail, setLoginPassword, register, login, logout, user } = useAuthContext();

	return (
		<div
			style={sidebarBackground}
		>
			<card className="m-3 p-2">
				<div>
					<h3>Register with email and password</h3>
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
					<h3>Sign in with email and password</h3>
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
					<h3>User Signed in</h3>
				</div>
				<div>
					{user?.email}
				</div>
				<div>
					<h3>Sign Out</h3>
				</div>
				<div className="p-2">
					<button className="btn btn-secondary" onClick={logout}>Sign out</button>
				</div>
			</card>
		</div>
	);
};

export default Login;
