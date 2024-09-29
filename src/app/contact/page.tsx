'use client';
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FaLinkedin, FaSlack } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';

const addresses = [
	{ title: 'Bangladesh Blockchain Association', details: 'House 01, Road 01, Block C \nPallabi, Mirpur-12, Dhaka \nBangladesh' },
	{ title: 'Office Rajshahi', details: 'Padmarpar, New Market \n6201, Rajshahi \nBangladesh' },
];

const contactItems = [
	{
		title: 'Email',
		icon: <MdAlternateEmail />,
		data: 'info@bangladeshblockchainassociation.org',
		link: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@bangladeshblockchainassociation.org',
	},
	{ title: 'Slack', icon: <FaSlack />, data: 'ibnblas.slack.com', link: 'https://ibnblas.slack.com' },
	{ title: 'Twitter', icon: <FaXTwitter />, data: '@BNBLASORG', link: 'https://www.twitter.com/BNBLASORG' },
	{ title: 'LinkedIn', icon: <FaLinkedin />, data: 'linkedin.com/company/bangladesh-blockchain-association/', link: 'https://www.linkedin.com/company/bangladesh-blockchain-association/' },
];

export default function Contact() {
	return (
		<div className="pb-10">
			<div className="bg-primary py-[15vh]">
				<p className="text-4xl text-center font-bold my-auto text-white">Contact Us</p>
			</div>
			<div>
				<Card className="shadow-lg" sx={{ minHeight: '50vh', maxWidth: { xs: '90%', xl: '75%' }, margin: '-60px auto 60px auto', border: 'none' }}>
					<CardContent sx={{ padding: { xs: '2rem', xl: '4rem' } }}>
						<Grid container spacing={2}>
							{addresses.map((address) => (
								<Grid item key={address.title} xs={12} md={6}>
									<Container className="mb-5">
										<Typography sx={{ fontSize: 14 }} fontWeight={600} gutterBottom>
											{address.title}
										</Typography>
										<Typography sx={{ fontSize: 14, whiteSpace: 'pre' }} color="text.secondary" gutterBottom>
											{address.details}
										</Typography>
									</Container>
								</Grid>
							))}
							<Grid item xs={12} md={6}>
								<Container className="mb-5">
									<Typography sx={{ fontSize: 14 }} fontWeight={600} gutterBottom>
										Board
									</Typography>
									<Typography sx={{ fontSize: 14, whiteSpace: 'pre' }} color="text.secondary" gutterBottom>
										Belal Abdullah Anas (Chairman)
									</Typography>
									<Typography sx={{ fontSize: 14, whiteSpace: 'pre', textWrap: 'wrap' }} color="text.secondary" gutterBottom>
										Md Zahid Hasan Patwary (Chief Technology Officer)
									</Typography>
								</Container>
							</Grid>
						</Grid>
						<Grid className="py-5" container justifyContent={'center'} spacing={2}>
							{contactItems.map((item) => (
								<Grid key={item.title} item xs={12} md={6}>
									<Container className="py-5">
										<div className="flex items-center gap-2">
											{item.icon}
											{item.title}
										</div>
										<a href={item.link} target="_blank">
											<Typography className="mt-2 cursor-pointer hover:text-primary" variant="body2" color="gray">
												{item.data}
											</Typography>
										</a>
									</Container>
								</Grid>
							))}
						</Grid>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
