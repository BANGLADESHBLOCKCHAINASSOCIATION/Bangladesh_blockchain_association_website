import Logo from '@/../public/logo.png';
import Image from 'next/image';

export default function Navbar() {
	return (
		<div className="bg-white w-full flex items-center justify-between py-3 lg:px-10 px-5 fixed top-0 border-b z-20">
			<div>
				<Image src={Logo} className="w-[80px] lg:w-auto" height={70} width={170} alt="Bangladesh Blockchain Association" />
			</div>

			<div className="lg:flex gap-8 hidden">
				<span>Home</span>
				<span>Engagements</span>
				<span>Events</span>
				<span>News</span>
				<span>BBA Membership</span>
				<span>About</span>
				<span>Contact</span>
			</div>
		</div>
	);
}
