import React, { useState } from 'react';
import styled from 'styled-components'
import '../App.css';
import SubMenu from './SubMenu.jsx'
import { Link } from 'react-router-dom'
import { useAuthContext } from "../context/AuthContextProvider.jsx"

const NavIcon = styled(Link)`
	margin-left: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
`;

const SideBarWrap = styled.div`
	width: 100%;
`;
const Nav = styled.nav`
    padding: 1em;
    background: #6c63ff;
    @media (max-width: 700px) {
        padding-top: 64px;
    }
    @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
        overflow-y: scroll;
    }
`;
const NavTwo = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1em;
        color: #333;
    }
    a:visited {
        color: #333;
    }
    a:hover,
    a:focus {
        color: #333 ;
    }
`;
const queries = {
	xs: '(max-width: 320px)', //query for xs devices
	sm: '(max-width: 720px)',
	md: '(max-width: 1024px)'
}

const SideBar = () => {
	const { user } = useAuthContext;

	return (
		<Nav>
			<NavTwo >
				<SubMenu />
			</NavTwo>
		</Nav>
	)
}

export default SideBar;
