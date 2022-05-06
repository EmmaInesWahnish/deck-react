const GoogleLogin = async () => {
	try {
		await fetch('/v2/auth/google/auth_url')
			.then((response) => response.json())
			.catch((err) => console.log(err))
	} catch (error) {
		console.log(error.message);
	}
}

export default GoogleLogin