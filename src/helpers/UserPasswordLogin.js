const UserPasswordLogin = () => {
	try {
		const formData = new FormData();
		formData.append("username", "emma.wahnish@groovinads.com");
		formData.append("password", "jsthlj00huracan")
		fetch('/v2/auth/password/login',
		{
			method: "POST",
			body: formData,
		}).then((response) => response.json())
	} catch (error) {
		console.log(error.message);
	}
}

export default UserPasswordLogin