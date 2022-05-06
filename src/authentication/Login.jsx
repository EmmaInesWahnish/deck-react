import img2 from "../assets/backgroundForLogin.png";
import { useTranslation } from 'react-i18next';
import { useAuthContext } from "../context/AuthContextProvider";
import { Card } from 'react-bootstrap';
import GoogleImage from "../assets/IOS_Google_icon.png"
import * as RiIcons from "react-icons/ri";
//import UserPasswordLogin from "../helpers/UserPasswordLogin";
import googleLogin from '../helpers/GoogleLogin';
import googleLogout from '../helpers/GoogleLogout';

const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center center",
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
		UserPasswordLogin,
		user
	} = useAuthContext();

    const [t, i18n] = useTranslation('translation');

	return (
		<div
			style={sidebarBackground}
		>
			<Card className="cardWidth">
				<div className="center p-2">
					<input className="formWidth" placeholder={t("email")} onChange={(event) => { setRegisterEmail(event.target.value) }} />
				</div>
				<div className="center p-2">
					<input type="password" className="formWidth" placeholder={t("password")} onChange={(event) => { setRegisterPassword(event.target.value) }} />
				</div>
				<div className="center p-2">
					<button className="btn btn-danger formWidth" disabled={user} onClick={register}>{t("Register")}</button>
				</div>
				<div className="p-2 center">
					<input className="formWidth" placeholder={t("email")} onChange={(event) => { setLoginEmail(event.target.value) }} />
				</div>
				<div className="p-2 center">
					<input type="password" className="formWidth" placeholder={t("password")} onChange={(event) => { setLoginPassword(event.target.value) }} />
				</div>
				<div className="p-2 center">
					<button className="btn btn-primary formWidth" disabled={user} onClick={UserPasswordLogin}>{t("Sign_In")}</button>
				</div>
				<div className="center p-2">
					<input className="formWidth" placeholder={t("email")} onChange={(event) => { setResetEmail(event.target.value) }} />
				</div>
				<div className="center p-2">
					<button className="btn btn-secondary formWidth" disabled={user} onClick={forgotPassword}>{t("Reset_Password")}</button>
				</div>
				<div className="center p-2">
					<h3>{t("Sign_Google")}</h3>
				</div>
				<div className="center p-2">
					<button className="btn btn-light googleWidth" disabled={user} onClick={googleLogin}><img id="myImg" src={GoogleImage} alt="Google Logo" width="20" height="auto" /></button>
					<button className="btn btn-light googleWidth" disabled={user} onClick={googleLogout}><RiIcons.RiLogoutCircleRLine /></button>
				</div>
			</Card>
		</div>
	);
};

export default Login;
