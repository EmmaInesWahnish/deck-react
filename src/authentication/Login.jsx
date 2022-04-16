import img2 from "../assets/login-background.png";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
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
	const [user, setUser] = useState({});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser)
		});
		return unsubscribe;
	}, []);

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				registerEmail,
				registerPassword
			)
			console.log(user)
		} catch (error) {
			console.log(error.message);
		}
	}

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				loginEmail,
				loginPassword
			)
			console.log(user)
		} catch (error) {
			console.log(error.message);
		}
	}

	const logout = async () => {
		await signOut(auth);
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
						<button className="btn btn-secondary" onClick={logout}>Logout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
