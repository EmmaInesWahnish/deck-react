import { useState, useEffect } from "react";
const GoogleLogout = () => {
	try {
		//useEffect(() => {
		// POST request using fetch inside useEffect React hook
		const requestOptions = {
			method: 'POST',
			mode: 'no-cors',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title: 'Logout Google' })
		};
		fetch('https://api.groovinads.com/v2/auth/logout', requestOptions)
			.then(res => res.json());

		// empty dependency array means this effect will only run once (like componentDidMount in classes)
		//}, []);
	} catch (error) {
		console.log(error.message);
	}
}

export default GoogleLogout