import Banner from '@/components/Banner';
import Events from '@/components/Events';
import GoalsSection from '@/components/GoalsSection';

export default function Home() {
	return (
		<main className="px-10 lg:px-28">
			<Banner />
			<GoalsSection />

			<div className="gradiantBg my-10 flex flex-col justify-center py-20 -mx-10 lg:-mx-28">
				<p className="text-center italic font-serif text-xl px-10 lg:px-0 lg:max-w-[40%] mx-auto">
					“Designed as a Decentralized Semi-Autonomous Organization (DSAO), the EBA incorporates the genuine concept of collaboration and cooperation of members in a distributed network. That makes
					EBA a fully transparent and resilient representative of the European blockchain community.”
				</p>
				<div className="mt-6">
					<p className="text-center font-semibold text-lg">Dr. Michael Gebert</p>
					<p className="text-center mt-1">EBA Chairman</p>
				</div>
			</div>

			<Events />

			{/* <MotionDiv variants={variant} initial="hidden" whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6, ease: 'easeInOut' }} viewport={{ once: true }}>
				<Contact />
			</MotionDiv> */}
		</main>
	);
}
