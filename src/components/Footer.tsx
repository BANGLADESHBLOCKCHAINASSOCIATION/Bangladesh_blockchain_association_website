import Link from 'next/link';
import { FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const iconProps = { size: 25, className: 'text-[#58BF77]' };

const links = [
	{ title: 'LinkedIn', icon: <FaLinkedin {...iconProps} />, link: 'https://www.linkedin.com/company/bangladesh-blockchain-association/' },
	{ title: 'Twitter', icon: <FaSquareXTwitter {...iconProps} />, link: 'https://x.com/BDBlockchainAsn' },
	// { title: 'Telegram', icon: <FaTelegram {...iconProps} />, link: '' },
];

const navigateList = [
	{ title: 'Home', link: '/' },
	{ title: 'Membership', link: '/membership' },
	{ title: 'Contact', link: '/contact' },
];

export default function Footer() {
	return (
		<div className="py-10 bg-[#13331B] text-white">
			<div className="flex justify-around">
				<div className="px-6 lg:px-12 flex flex-col justify-center">
					{/* <Image src={'/footerLogo.png'} className="w-16 lg:w-40" height={200} width={200} alt="Bangladesh Blockchain Association" /> */}
					<div className="flex flex-col justify-center gap-2 mt-4">
						{links.map((link) => (
							<div key={link.title} className="flex items-center gap-3">
								{link.icon}
								{link.title}
							</div>
						))}
					</div>
				</div>
				<div>
					<p className="font-semibold text-xs lg:text-base">Navigate</p>
					<ul className="text-xs lg:text-sm leading-6 mt-2">
						{navigateList.map((nav) => (
							<li key={nav.link}>
								<Link href={nav.link}>{nav.title}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<p className="font-semibold text-xs lg:text-base">About</p>
					<ul className="text-xs lg:text-sm leading-6 mt-2">
						<Link href="/about">
							<li>About us</li>
						</Link>
					</ul>
				</div>
				<div>
					<p className="font-semibold text-xs lg:text-base">Contact</p>
					<ul className="text-xs lg:text-sm leading-6 mt-2">
						<Link href="/contact">
							<li>Contact us</li>
						</Link>
					</ul>
				</div>
			</div>
			<p className="text-[10px] px-5 lg:text-sm mt-10 text-center">Note: We are not supporting any kind of Crypto-Currencies / Trading / Financial Services</p>
		</div>
	);
}
