import React from 'react';
import styled from 'styled-components'
import '../App.css';
import { Link } from 'react-router-dom'
import { useAuthContext } from "../context/AuthContextProvider.jsx"

const GlobalOperations = () => {
	return (
		<div>
			<h3>I am Global Operations</h3>
		</div>
	)
}

export default GlobalOperations;
