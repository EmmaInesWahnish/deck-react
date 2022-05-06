const GoogleLogout = async () => {
	try {
		const formData = new FormData();
		formData.append("username", "emma.wahnish@groovinads.com");
		await fetch('/v2/auth/logout',
		{
			method: 'POST',
			body: formData,
		}
		)
		.then((response) => response.json())
		.catch((err) => console.log(err))
	.then

	} catch (error) {
		console.log(error.message);
	}
}

export default GoogleLogout