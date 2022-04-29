import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBarData } from "./SideBarData.js";
import { useAuthContext } from "../context/AuthContextProvider.jsx"
import styled from 'styled-components';

const SubMenu = () => {
	const { user } = useAuthContext;
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	function toggle(value) {
		value = !value
	}

	return (
		<>
			{
				SideBarData.map((val, key) => {
					return (
						<>
							<Link key={key} to={val.path} >
								<div className='cornsilk p-1' onClick={val.subNav && showSubnav}>{val.icon} {val.name}
									{val.subNav && subnav
										? toggle(val.isOpen)
										: val.subNav
											? toggle(val.isOpen)
											: null}
								</div>
							</Link>
							{
								subnav ?
									<>
										{val.subNav && val.subNav.map((val, key) => {
											return (
												<Link to={val.path}>
													<div key={key} className='cream p-2'>
														{val.icon} {val.name}
													</div>
												</Link>
											)
										})}
									</>
									:
									<></>
							}
						</>
					)
				})
			}
		</>)
}

export default SubMenu;