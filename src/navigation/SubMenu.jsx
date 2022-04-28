import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBarData } from "./SideBarData.js";
import { useAuthContext } from "../context/AuthContextProvider.jsx"
import styled from 'styled-components';

const SubMenu = () => {
	const { user } = useAuthContext;
	const [subnav, setSubnav] = useState(false);

	let theMenu = [];

	const showSubnav = () => setSubnav(!subnav);

	function fillmenu(array) {
		theMenu = [];
		if (subnav) {
			array.forEach(element => {
				theMenu.push(element);
			});
		}
	}

	return (
		<>
			{
				SideBarData.map((val, key) => {
					return (
						<>
							<Link key={key} to={val.path} >
								<li className='text-light p-2' onClick={val.subNav && showSubnav}>{val.icon} {val.name}
									{val.subNav && subnav
										? fillmenu(val.subNav)
										: val.subNav
											? fillmenu(val.subNav)
											: null}
								</li>
								{
									subnav && val.subNav && theMenu.map((val, key) => {
										return (
											<Link to={val.path}>
												<li key={key} className='text-light p-2'>
													{val.icon} {val.name}
												</li>
											</Link>
										)
									})}
							</Link>
						</>
					)
				})
			}
		</>)
}

export default SubMenu;