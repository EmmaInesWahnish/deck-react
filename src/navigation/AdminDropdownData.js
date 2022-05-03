import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
	{
		name: "Home",
		path: '/home',
		isOpen: false,
		hasSubmenu: false,
		icon: <MdIcons.MdHome />,
	},
	{
		name: "Implementations",
		path: '/implementations',
		icon: <MdIcons.MdGrading />,
		isOpen: false,
		hasSubmenu: true,
		subNav: [
			{
				name: "Data Sources",
				path: '/implementations/datasources',
				icon: <MdIcons.MdDriveEta />,
			},
			{
				name: "Conversion Tracking",
				path: '/implementations/ctracking',
				icon: <MdIcons.MdFilter />,
			},
			{
				name: "Retargeting",
				path: '/implementations/retargeting',
				icon: <MdIcons.MdArrowCircleUp />,
			},
			{
				name: "Customize Segments",
				path: '/implementations/segments',
				icon: <MdIcons.MdDriveEta />,
			},
		]
	},
	{
		name: "Banners",
		path: '/banners',
		icon: <MdIcons.MdPermMedia />,
		isOpen: false,
		hasSubmenu: true,
		subNav: [
			{
				name: "DCO",
				path: '/banners/dco',
				icon: <MdIcons.MdDriveEta />,
			},
			{
				name: "Trackers",
				path: '/banners/trackers',
				icon: <MdIcons.MdFilter />,
			},
			{
				name: "Banner Presentations",
				path: '/banners/bannerpresentations',
				icon: <MdIcons.MdArrowCircleUp />,
			},
			{
				name: "Media Manager",
				path: '/banners/mediamanager',
				icon: <MdIcons.MdDriveEta />,
			},
			{
				name: "Tags Export",
				path: '/banners/tagsexport',
				icon: <MdIcons.MdArrowCircleUp />,
			},
			{
				name: "Global Operations",
				path: '/banners/globaloperations',
				icon: <MdIcons.MdDriveEta />,
			},
		]
	},
	{
		name: "Campaigns",
		path: '/campaigns',
		isOpen: false,
		hasSubmenu: false,
		icon: <MdIcons.MdCampaign />
	},
	{
		name: "Reports",
		path: '/reports',
		isOpen: false,
		hasSubmenu: false,
		icon: <MdIcons.MdOutlineFeed />
	},
	{
		name: "Tools",
		path: '/overview/tools',
		icon: <MdIcons.MdConstruction />,
		isOpen: false,
		hasSubmenu: false,
	},
	{
		name: "Settings",
		path: '/overview/settings',
		icon: <MdIcons.MdSettings />,
		isOpen: false,
		hasSubmenu: false,
	}
]
