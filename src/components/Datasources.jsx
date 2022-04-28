import React from 'react';
import '../App.css';
import { useAuthContext } from "../context/AuthContextProvider.jsx"

const Datasources = () => {
	const { user } = useAuthContext;
	return (
		<>
			{
				user ?
					<div>
						<h3>I am Data Sources</h3>
					</div>
					:
					<div>
						<h3>Unauthorized access to Datasources</h3>
					</div>
			}
		</>
	)
}

export default Datasources;
