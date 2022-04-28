import React from 'react';
import '../App.css';
import { useAuthContext } from "../context/AuthContextProvider.jsx"

const Retargeting = () => {
	const { user } = useAuthContext;
	return (
		<>
			{
				user ?
					<div>
						<h3>I am Retargeting</h3>
					</div>
					:
					<div>
						<h3>Unauthorized access</h3>
					</div>
			}
		</>
	)
}

export default Retargeting;
