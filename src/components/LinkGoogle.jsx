import React from 'react';
import { useEffect } from "react";

import '../App.css';

const LinkGoogle = () => {

	useEffect(() => {
		window.location.href = "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=34402980857-75fg00enhq4vsdm3o2mph1i775up7obc.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapi.groovinads.com%2Fv2%2Fauth%2Fgoogle%2Flogin&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email";
	  }, []);

	  return (
		<div>
		  <h2>Link to Google</h2>
		</div>
	  );
}

export default LinkGoogle;
