import { FaLinkedin, FaTelegram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

export default function Footer() {
	return (
		<div className="py-10 bg-[#13331B] text-white">
			<div className="flex justify-around">
				<div className="px-6 lg:px-12 flex flex-col justify-center">
					{/* <Image src={'/footerLogo.png'} className="w-16 lg:w-40" height={200} width={200} alt="Bangladesh Blockchain Association" /> */}
					<div className="flex justify-center gap-2 mt-4">
						<FaLinkedin size={20} className="text-[#58BF77]" />
						<FaSquareXTwitter size={20} className="text-[#58BF77]" />
						<FaTelegram size={20} className="text-[#58BF77]" />
					</div>
				</div>
				<div>
					<p className="font-semibold text-sm lg:text-base">Navigate</p>
					<ul className="text-xs lg:text-sm leading-6 mt-2">
						<li>Home</li>
						<li>Engagements</li>
						<li>Membership</li>
						<li>About</li>
						<li>Contact</li>
						<li>News</li>
					</ul>
				</div>
				<div>
					<p className="font-semibold text-sm lg:text-base">About</p>
					<ul className="text-xs lg:text-sm leading-6 mt-2">
						<li>Home</li>
						<li>Engagements</li>
						<li>Membership</li>
						<li>About</li>
						<li>Contact</li>
						<li>News</li>
					</ul>
				</div>
				<div>
					<p className="font-semibold text-sm lg:text-base">Contact</p>
					<ul className="text-xs lg:text-sm leading-6 mt-2">
						<li>Home</li>
						<li>Engagements</li>
						<li>Membership</li>
						<li>About</li>
						<li>Contact</li>
						<li>News</li>
					</ul>
				</div>
			</div>
			<p className="text-[10px] px-5 lg:text-sm mt-10 text-center">Note: We are not supporting any kind of Crypto-Currencies / Trading / Financial Services</p>
		</div>
	);
}
