import { useState, useEffect } from "react";

const GoogleLogin = () => {
	try {
		const formData =//useEffect(() => {
		fetch('https://api.groovinads.com/v2/auth/google/auth_url')
			.then((response) => response.json())
			.catch((err) => console.log(err))
		//	}, []);
	} catch (error) {
		console.log(error.message);
	}
}

export default GoogleLogin