import coverImage from '@/../public/banner.jpg';
import Image from 'next/image';
import { MotionDiv } from './MotionDiv';

export default function Banner() {
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
			className="flex flex-col justify-center gap-5 -mx-10 lg:-mx-28 lg:px-28 px-10 py min-h-[600px] max-h-[75vh] relative bg-black text-white">
			<Image className="absolute inset-0 object-cover opacity-50 w-full h-full" src={coverImage} height={600} width={1000} alt="Bangladesh urban photo" />
			<p className="whitespace-pre-line text-xl lg:text-3xl font-bold lg:leading-10 z-10">{'Empowering The Bangladeshi \nBlockchain Ecosystem'}</p>
			<p className="lg:max-w-[65%] text-xs leading-5 lg:text-base z-10">
				We combine, synchronize and leverage blockchain-related activities of European corporations, startups, venture capitalists, and scientific institutes. We serve as a superior, neutral body to
				aggregate and coordinate blockchain activities throughout Europe and to provide Non-European parties access into the European blockchain ecosystem.
			</p>
			<div className="primary-btn z-10">View Engagements</div>
		</MotionDiv>
	);
}
