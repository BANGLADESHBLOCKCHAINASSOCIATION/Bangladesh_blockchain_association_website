'use client';
import Image from 'next/image';
import { IoPersonOutline } from 'react-icons/io5';

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
		<div className="my-16">
			<p className="sectionTitle mb-16">Events</p>
			<div className="flex items-center justify-center gap-10">
				{events.map((event) => (
					<div key={event.title}>
						<Image className="w-full" src={event.imgae} height={190} width={344} alt={event.title + ' Banner'} />
						<div className="flex flex-col gap-3 mt-4">
							<p className="font-semibold">{event.title}</p>
							<p className="text-sm flex items-center gap-3">
								<IoPersonOutline /> {event.organizer}
							</p>
							<p className="text-sm">{event.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
