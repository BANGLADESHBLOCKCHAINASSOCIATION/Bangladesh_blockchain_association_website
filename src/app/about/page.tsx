import { MotionDiv } from '@/components/MotionDiv';
import Image from 'next/image';

const page = () => {
	return (
		<div className="py-10">
			<div className="overflow-hidden flex gap-2 justify-center">
				<MotionDiv initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-3xl font-bold">
					Meet
				</MotionDiv>
				<MotionDiv initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-3xl font-bold">
					Our
				</MotionDiv>
				<MotionDiv initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="text-3xl font-bold">
					Members
				</MotionDiv>
			</div>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-12">
				{[1, 2, 3, 4].map((m) => (
					<MotionDiv
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1.1 }}
						className="w-64 h-80 rounded-lg overflow-hidden relative group transition-all duration-1000"
						key={m}>
						<div className="absolute inset-0" style={{ boxShadow: '0px -60px 50px -13px rgba(0,0,0,0.6) inset' }}></div>
						<Image width={600} height={600} className="w-full h-full object-cover" src={`/members/member${m}.jpg`} alt="" />
						<div className="absolute px-5 left-0 top-5 translate-y-[105%] group-hover:-translate-y-0 transition-all duration-[1.2s] z-10">
							<p className="font-semibold text-base text-white drop-shadow-xl">Mr. Belal Abdullah Anas</p>
							<p className="font-semibold text-sm text-white drop-shadow-xl">Chairman, BBA</p>
							<p className="text-xs text-white mt-10 transition-all duration-[1.2s]">
								Chairman and founding member of Bangladesh Blockchain Association, Mr. Belal Abdullah Anas is one of the most experienced persons among Bangladesh in the fields of Blockchain
								activities and has been working with leading blockchain companies to make Bangladesh a more well known source of blockchain pioneers
							</p>
						</div>
						<div className="bg-[#58BF77] absolute inset-0 translate-y-[100%] group-hover:translate-y-0 transition-all duration-1000 rounded-lg opacity-90"></div>
					</MotionDiv>
				))}
			</div>

			<div>
				<div className="overflow-hidden flex gap-2 justify-center mt-16">
					<MotionDiv initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-3xl font-bold">
						More
					</MotionDiv>
					<MotionDiv initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-3xl font-bold">
						of
					</MotionDiv>
					<MotionDiv initial={{ y: 100 }} animate={{ y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="text-3xl font-bold">
						Us
					</MotionDiv>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center my-10 w-8/12 mx-auto">
					{[1, 2, 3, 4, 5, 6].map((m) => (
						<MotionDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.1 }} key={m} className="w-full mx-auto overflow-hidden">
							<Image width={600} height={600} className="w-full h-60 object-cover object-top mb-4 rounded-lg" src={`/members/om${m}.jpg`} alt="" />

							<p className="font-semibold">Md. Zahid Hassan Patwary</p>
							<p className="text-xs mt-1">Digital Marketing Manager</p>
						</MotionDiv>
					))}
				</div>
			</div>
		</div>
	);
};

export default page;
