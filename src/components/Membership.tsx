import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { SiSitepoint } from 'react-icons/si';
import { MotionDiv } from './MotionDiv';

const benefits = [
	'Advocacy for Software & ITES',
	'Corporate Tax Exemption',
	'Network Possibilities',
	'Recommendation of Trained Human Resources',
	'Access to programmes and projects',
	'Seminars and Workshops',
	'Training Courses',
	'Discounted Rates for Event Participation',
	'Office Space in STP-1',
];

const Membership = () => {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: 0.3,
				ease: 'easeInOut',
			},
		},
	};

	const item = {
		hidden: { y: -20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeInOut',
			},
		},
	};
	return (
		<MotionDiv variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full">
			<Card sx={{ minWidth: 275, width: '100%', padding: '16px' }}>
				<CardContent sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '20px', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
					<div className="order-2 md:order-1">
						<Typography variant="h5">Benefits of Members</Typography>

						<div className="mt-3">
							{benefits.map((value, i) => (
								<div key={i} className="flex items-center gap-2 text-sm pb-2">
									<SiSitepoint />
									{value}
								</div>
							))}
						</div>
					</div>

					<div className="text-center order-1 md:order-2">
						<Typography variant="h3" fontWeight={600}>
							Become a
						</Typography>
						<Typography variant="h2" fontWeight={700} color="#2ce452">
							Member
						</Typography>
					</div>

					<div className="order-3 py-4 md:p-0">
						<a href="https://forms.gle/NXhme1X7rQ4f1qgp8" target="_blank" className="brk-btn font-bold">
							Apply Now
						</a>
					</div>
				</CardContent>
			</Card>
		</MotionDiv>
	);
};

export default Membership;
