import Banner from '@/components/Banner';
import Events from '@/components/Events';
import GoalsSection from '@/components/GoalsSection';
import { TextField } from '@mui/material';

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

			<div className="my-16">
				<p className="sectionTitle mb-16">Contact Us</p>

				<div className="flex flex-col gap-8">
					<TextField className="w-full" id="outlined-basic" placeholder="john@doe.com" label="Email" variant="outlined" />
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
						<TextField className="w-full lg:w-1/2" id="outlined-basic" placeholder="John Doe.com" label="Name" variant="outlined" />
						<TextField className="w-full lg:w-1/2" id="outlined-basic" placeholder="Contribute in an event" label="Subject" variant="outlined" />
					</div>
					<TextField className="w-full" id="outlined-multiline-static" label="Multiline" multiline rows={8} />
					<button className="primary-btn mx-auto">Send Email</button>
				</div>
			</div>
		</main>
	);
}
