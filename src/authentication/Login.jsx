import img2 from "../assets/login-background.png";
import { useAuthContext } from "../context/AuthContextProvider.jsx";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config.js";

const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "top right",
	objectFit: 'contain'
};

const Login = () => {
	const [registerEmail, setRegisterEmail] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");

	const { register, login, logout } = useAuthContext();

	const [user, setUser] = useState({});

	onAuthStateChanged(auth, (currentUser) => {
		setUser(currentUser);
	})

	function newUser() {
		register(registerEmail, registerPassword);
	}

	function existingUser() {
		login(loginEmail, loginPassword);
	}

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
						<input name="newu" placeholder="email..." onChange={(event) => { setRegisterEmail(event.target.value) }} />
						<input name="newp" placeholder="password..." onChange={(event) => { setRegisterPassword(event.target.value) }} />
						<button className="btn btn-success" onClick={newUser()}>Create User</button>
					</div>
				</div>
				<div className="m-5">
					<div>
						<h3>Login with email and password</h3>
					</div>
					<div className="d-flex">
						<input name="existu" placeholder="email..." onChange={(event) => { setLoginEmail(event.target.value) }} />
						<input name="existp" placeholder="password..." onChange={(event) => { setLoginPassword(event.target.value) }} />
						<button className="btn btn-light" onClick={existingUser}>Login</button>
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
						<button className="btn btn-secondary" onClick={logout}>Logout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
