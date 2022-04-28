import React from 'react';
import '../App.css';
import { useAuthContext } from "../context/AuthContextProvider.jsx"

const Segments = () => {
	const { user } = useAuthContext;
	return (
		<>
			{
				user ?
					<div>
						<h3>I am Customize Segments</h3>
					</div>
					:
					<div>
						<h3>Unauthorized access</h3>
					</div>
			}
		</>
	)
}

export default Segments;
