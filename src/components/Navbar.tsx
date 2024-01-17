'use client';

import Logo from '@/../public/logo.png';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

const NavOptions = [
	{ title: 'Home', link: '/' },
	{ title: 'Engagements', link: '/' },
	{ title: 'Events', link: '/' },
	{ title: 'News', link: '/' },
	{ title: 'About', link: '/' },
	{ title: 'Contact', link: '/' },
];

export default function Navbar() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="bg-white w-full flex items-center justify-between py-3 lg:px-10 px-5 fixed top-0 border-b z-20">
			<Link href={'/'}>
				<Image src={Logo} className="w-[80px] lg:w-auto" height={70} width={170} alt="Bangladesh Blockchain Association" />
			</Link>

			<div className="lg:flex gap-8 hidden">
				{NavOptions.map((option) => (
					<Link className="text-black" key={option.title} href={option.link}>
						{option.title}
					</Link>
				))}
			</div>
			<IconButton
				className="lg:hidden"
				onClick={handleClick}
				size="small"
				sx={{ ml: 2 }}
				aria-controls={open ? 'account-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}>
				<RxHamburgerMenu />
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&::before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
				{NavOptions.map((option) => (
					<MenuItem key={option.title} onClick={handleClose}>
						<Link className="text-black text-sm px-5 py-2" href={option.link}>
							{option.title}
						</Link>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
