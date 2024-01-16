'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function GoalsSection() {
	const [goalIndex, setGoalIndex] = useState<number>(0);

	const goals = [
		{
			icon: '/icons/graduation-cap.png',
			title: 'Blockchain Advocacy',
			desc: 'Promoting the adoption and understanding of blockchain technology across various sectors.',
		},
		{
			icon: '/icons/graduation-cap.png',
			title: 'Regulatory Compliance',
			desc: 'Ensuring alignment with local policies and regulations governing blockchain and cryptocurrencies.',
		},
		{
			icon: '/icons/graduation-cap.png',
			title: 'Legal Education Initiatives',
			desc: 'Providing training on local laws related to blockchain and collaborating with bank authorities for comprehensive understanding.',
		},
		{
			icon: '/icons/graduation-cap.png',
			title: 'Tech Competitions',
			desc: 'Organizing Olympiads and Hackathons to foster innovation and skill development in the blockchain space.',
		},
		{
			icon: '/icons/graduation-cap.png',
			title: 'Certification Programs',
			desc: 'Offering professional training programs and certifications to enhance expertise in blockchain technologies.',
		},
		{
			icon: '/icons/graduation-cap.png',
			title: 'Employment Hub',
			desc: 'Connecting individuals with job opportunities in the blockchain industry, bridging the gap between talent and demand.',
		},
	];
	return (
		<div className="py-14">
			<p className="sectionTitle mb-16">Our Goals</p>

			<div className="flex gap-10">
				<div className="w-full lg:w-1/2 border rounded-md overflow-hidden">
					{goals.map((goal, index) => (
						<div onClick={() => setGoalIndex(index)} key={goal.title} className="border-b last:border-b-0 flex items-center justify-between p-8 hover:bg-[#8ad29f] cursor-pointer gap-5">
							<div className="flex gap-5 lg:gap-20">
								<span>{index + 1}</span>
								<p className="font-semibold">{goal.title}</p>
							</div>
							<div className={`border border-black rounded-full p-2 ${goalIndex === index && 'bg-[#58BF77] border-transparent text-white -rotate-45'}`}>
								<FaArrowRight />
							</div>
						</div>
					))}
				</div>

				<div className="w-1/2 hidden lg:flex flex-col justify-center gap-5 p-14 border rounded-md h-fit">
					<div className="px-5 py-6 h-28 w-28 border border-[#58BF77] rounded-full">
						<Image className="w-full h-full object-cover" src={goals[goalIndex].icon} height={80} width={80} alt={goals[goalIndex].title + ' icon'} />
					</div>
					<p className="font-semibold text-xl">{goals[goalIndex].title}</p>
					<p>{goals[goalIndex].desc}</p>
					<div className="primary-btn">Read More</div>
				</div>
			</div>
		</div>
	);
}
