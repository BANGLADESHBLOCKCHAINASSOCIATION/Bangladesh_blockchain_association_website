'use client';

import Logo from '@/../public/logo.png';
import { IconButton, Menu, MenuItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MotionDiv } from './MotionDiv';

const NavOptions = [
	{ title: 'Home', link: '/' },
	{ title: 'Membership', link: '/membership' },
	// { title: 'Engagements', link: '/engagement' },
	// { title: 'Events', link: '/events' },
	// { title: 'News', link: '/news' },
	{ title: 'About', link: '/about' },
	{ title: 'Contact', link: '/contact' },
];

export default function Navbar() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const pathname = usePathname();

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const variant = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	return (
		<MotionDiv
			variants={variant}
			initial="hidden"
			animate="visible"
			transition={{
				duration: 0.7,
				delay: 0.2,
				ease: 'easeInOut',
			}}
			className="bg-white w-full flex items-center justify-between py-3 lg:px-10 px-5 fixed top-0 border-b z-20">
			<Link href={'/'}>
				<Image src={Logo} className="w-[80px] lg:h-[55px] lg:w-auto" height={70} width={170} alt="Bangladesh Blockchain Association" />
			</Link>

			<div className="lg:flex gap-8 hidden">
				{NavOptions.map((option) => (
					<Link className={`${pathname === option.link ? 'text-primary' : 'text-black'} text-sm font-semibold hover:underline`} key={option.title} href={option.link}>
						{option.title}
					</Link>
				))}
			</div>
			<IconButton
				className="lg:!hidden"
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
					<MenuItem key={option.title} className="text-black text-sm px-5 py-2" onClick={handleClose}>
						<Link href={option.link}>{option.title}</Link>
					</MenuItem>
				))}
			</Menu>
		</MotionDiv>
	);
}
