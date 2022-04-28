import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SideBarData = [
	{
		name: "Home",
		path: '/home',
		icon: <MdIcons.MdHome />,
	},
	{
		name: "Implementations",
		path: '/implementations',
		icon: <MdIcons.MdGrading />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,
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
		icon: <MdIcons.MdPermMedia />
	},
	{
		name: "Campaigns",
		path: '/campaigns',
		icon: <MdIcons.MdCampaign />
	},
	{
		name: "reports",
		path: '/reports',
		icon: <MdIcons.MdOutlineFeed />
	},
	{
		name: "tools",
		path: '/overview/tools',
		icon: <MdIcons.MdConstruction />
	},
	{
		name: "Settings",
		path: '/overview/settings',
		icon: <MdIcons.MdSettings />
	}
]
