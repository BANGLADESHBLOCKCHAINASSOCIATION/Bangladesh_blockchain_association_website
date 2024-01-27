'use client';

import goals from '@/../public/data/goals.json';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MotionDiv } from './MotionDiv';

type IGoal = {
	title: string;
	icon: string;
	desc: string;
};

export default function GoalsSection() {
	const [goalIndex, setGoalIndex] = useState<number>(0);

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				delay: 0.3,
				ease: 'easeInOut',
			},
		},
	};

	// const item = {
	// hidden: { y: 20, opacity: 0 },
	// visible: {
	// 	y: 0,
	// 	opacity: 1,
	// },
	// };

	return (
		<div className="py-14">
			<p className="sectionTitle mb-16">Our Goals</p>

			<MotionDiv className="flex gap-10 flex-row-reverse">
				<MotionDiv variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-1/2 hidden lg:flex flex-col justify-center gap-5 p-14 border rounded-md h-fit">
					<div className="px-5 py-6 h-28 w-28 border border-[#58BF77] rounded-full">
						<Image className="w-full h-full object-cover" src={goals[goalIndex]?.icon || '/icons/graduation-cap.png'} height={80} width={80} alt={goals[goalIndex]?.title + ' icon'} />
					</div>
					<p className="font-semibold text-xl">{goals[goalIndex]?.title}</p>
					<p>{goals[goalIndex]?.desc}</p>
					{/* <Link href={`/about/${goalIndex}`}>
						<button className="primary-btn">Read More</button>
					</Link> */}
				</MotionDiv>

				<div className="w-full lg:w-1/2 border rounded-md overflow-hidden">
					{goals?.map((goal, index) => (
						<MotionDiv
							variants={container}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							onClick={() => setGoalIndex(index)}
							key={goal.title}
							className="border-b last:border-b-0  p-8 hover:bg-[#8ad29f] cursor-pointer gap-5">
							<Link href={`/about/${index}`} className="lg:pointer-events-none flex items-center justify-between">
								<div className="flex gap-5 lg:gap-20">
									<span>{index + 1}</span>
									<p className="font-semibold">{goal.title}</p>
								</div>
								<div className={`border border-black rounded-full p-2 ${goalIndex === index && 'bg-[#58BF77] border-transparent text-white -rotate-45'}`}>
									<FaArrowRight />
								</div>
							</Link>
						</MotionDiv>
					))}
				</div>
			</MotionDiv>
		</div>
	);
}
