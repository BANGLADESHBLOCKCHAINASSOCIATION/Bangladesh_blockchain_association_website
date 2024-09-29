import Banner from '@/components/Banner';
import Events from '@/components/Events';
import GoalsSection from '@/components/GoalsSection';
import Membership from '@/components/Membership';
import { MotionDiv } from '@/components/MotionDiv';

export default function Home() {
	return (
		<main className="px-10 lg:px-28 overflow-hidden">
			<Banner />
			<GoalsSection />

			<Membership />

			<MotionDiv
				initial={{ x: '100%' }}
				whileInView={{ x: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut', delayChildren: 0.8 }}
				className="gradiantBg my-10 flex flex-col justify-center py-20 -mx-10 lg:-mx-28">
				<MotionDiv className="text-center italic font-serif lg:text-xl px-10 lg:px-0 lg:max-w-[40%] mx-auto">
					“Designed as a Decentralized Semi-Autonomous Organization (DSAO), the BBA incorporates the genuine concept of collaboration and cooperation of members in a distributed network. That makes
					BBA a fully transparent and resilient representative of the European blockchain community.”
				</MotionDiv>
				<div className="mt-6">
					<p className="text-center font-semibold text-sm lg:text-lg">Mr. Belal Abdullah Anas</p>
					<p className="text-center text-sm mt-1">BBA Chairman</p>
				</div>
			</MotionDiv>

			{/* <Events /> */}

			{/* <MotionDiv variants={variant} initial="hidden" whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6, ease: 'easeInOut' }} viewport={{ once: true }}>
				<Contact />
			</MotionDiv> */}
		</main>
	);
}
