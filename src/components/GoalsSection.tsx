'use client';

import goals from '@/../public/data/goals.json';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

type IGoal = {
	title: string;
	icon: string;
	desc: string;
};

export default function GoalsSection() {
	const [goalIndex, setGoalIndex] = useState<number>(0);

	return (
		<div className="py-14">
			<p className="sectionTitle mb-16">Our Goals</p>

			<div className="flex gap-10">
				<div className="w-full lg:w-1/2 border rounded-md overflow-hidden">
					{goals?.map((goal, index) => (
						<div onClick={() => setGoalIndex(index)} key={goal.title} className="border-b last:border-b-0  p-8 hover:bg-[#8ad29f] cursor-pointer gap-5">
							<Link href={`/about/${index}`} className="lg:pointer-events-none flex items-center justify-between">
								<div className="flex gap-5 lg:gap-20">
									<span>{index + 1}</span>
									<p className="font-semibold">{goal.title}</p>
								</div>
								<div className={`border border-black rounded-full p-2 ${goalIndex === index && 'bg-[#58BF77] border-transparent text-white -rotate-45'}`}>
									<FaArrowRight />
								</div>
							</Link>
						</div>
					))}
				</div>

				<div className="w-1/2 hidden lg:flex flex-col justify-center gap-5 p-14 border rounded-md h-fit">
					<div className="px-5 py-6 h-28 w-28 border border-[#58BF77] rounded-full">
						<Image className="w-full h-full object-cover" src={goals[goalIndex]?.icon || '/icons/graduation-cap.png'} height={80} width={80} alt={goals[goalIndex]?.title + ' icon'} />
					</div>
					<p className="font-semibold text-xl">{goals[goalIndex]?.title}</p>
					<p>{goals[goalIndex]?.desc}</p>
					<Link href={`/about/${goalIndex}`}>
						<button className="primary-btn">Read More</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
