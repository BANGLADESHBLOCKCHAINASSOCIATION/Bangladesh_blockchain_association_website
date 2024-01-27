'use client';
import Image from 'next/image';
import { IoPersonOutline } from 'react-icons/io5';
import { MotionDiv } from './MotionDiv';

export default function Events() {
	const events = [
		{
			imgae: '/events/image 1.png',
			title: 'Pay 360',
			organizer: 'Institution of Blockchain, California',
			description: 'We are delighted to announce that Asosiasi Blockchain Indonesia is an official supporting ...',
		},
		{
			imgae: '/events/image 2.png',
			title: 'TOKEN 2049',
			organizer: 'Institution of Blockchain, California',
			description: 'We are delighted to announce that Asosiasi Blockchain Indonesia is an official supporting ...',
		},
		{
			imgae: '/events/image 3.png',
			title: 'Connect 2024',
			organizer: 'Institution of Blockchain, California',
			description: 'We are delighted to announce that Asosiasi Blockchain Indonesia is an official supporting ...',
		},
	];

	return (
		<MotionDiv initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="my-16">
			<p className="sectionTitle mb-16">Events</p>
			<div className="flex flex-col lg:flex-row items-center justify-center gap-10">
				<div className="w-1/3 border rounded-lg p-5">
					<Image
						className="w-full h-60 object-cover"
						src="https://img.freepik.com/free-vector/flat-coming-soon-background-with-megaphone_1017-33737.jpg?w=1060&t=st=1706384959~exp=1706385559~hmac=d383d03a5d50bfa38267125eb93eb39845ce04eb9ece9d2a7f5c8a1e5cd86544"
						height={190}
						width={344}
						alt={'Event Banner'}
					/>
					<div className="flex flex-col gap-3 mt-4">
						<p className="font-semibold">Exciting Events coming soon!</p>
						<p className="text-sm flex items-center gap-3">
							<IoPersonOutline /> Bangladesh Blockchain Association
						</p>
						<p className="text-xs">Stay tuned for exciting new events from around the globe. We will show updated info on BBA official website</p>
					</div>
				</div>
			</div>
		</MotionDiv>
	);
}
