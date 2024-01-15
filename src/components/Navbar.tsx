import Logo from '@/../public/logo.png';
import Image from 'next/image';

export default function Navbar() {
	return (
		<div className="bg-white w-full flex items-center justify-between py-3 px-10 fixed top-0 border-b">
			<div>
				<Image src={Logo} height={70} width={170} alt="Bangladesh Blockchain Association" />
			</div>

			<div className="flex gap-8">
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
