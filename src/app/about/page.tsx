'use client';
import { Typography, Box, List, ListItem, ListItemText, Divider } from '@mui/material';

const page = () => {
	return (
		<Box sx={{ padding: '24px' }}>
			{/* Main Title */}
			<Typography variant="h4" gutterBottom align="center">
				About Bangladesh Blockchain Association
			</Typography>

			{/* Introduction */}
			<Typography variant="body1" paragraph>
				The Bangladesh Blockchain Association (BBA) is a pioneering organization dedicated to advancing the adoption and understanding of blockchain technology within Bangladesh. Established in 2024,
				the BBA is committed to positioning Bangladesh as a leader in the global blockchain ecosystem by promoting education, collaboration, and innovation.
			</Typography>

			{/* Mission */}
			<Typography variant="h5" gutterBottom>
				Our Mission
			</Typography>
			<Typography variant="body1" paragraph>
				Our mission is to foster a vibrant blockchain community in Bangladesh, empowering individuals and organizations to unlock the transformative potential of blockchain technology. We aim to
				bridge the gap between innovation and regulation, facilitating blockchain integration across various industries, from finance and supply chain management to healthcare and governance.
			</Typography>

			{/* Vision */}
			<Typography variant="h5" gutterBottom>
				Our Vision
			</Typography>
			<Typography variant="body1" paragraph>
				We envision a future where blockchain technology plays a pivotal role in driving transparency, security, and efficiency across all sectors in Bangladesh, positioning the country as a global
				hub for blockchain innovation.
			</Typography>

			{/* Core Values */}
			<Typography variant="h5" gutterBottom>
				Core Values
			</Typography>
			<List>
				<ListItem>
					<ListItemText primary="Transparency" secondary="We believe in openness and transparency in all our activities, fostering trust and accountability within the blockchain community." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Innovation" secondary="We strive to promote and nurture innovative blockchain solutions that address real-world challenges." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Collaboration" secondary="We emphasize the importance of partnerships and collaboration with local and global stakeholders to drive meaningful change." />
				</ListItem>
			</List>

			{/* Objectives */}
			<Typography variant="h5" gutterBottom>
				Our Objectives
			</Typography>
			<List>
				<ListItem>
					<ListItemText primary="Education & Awareness" secondary="To educate the public, businesses, and policymakers about the benefits and applications of blockchain technology." />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Industry Support"
						secondary="To support the development of blockchain-based startups and businesses by providing resources, mentorship, and networking opportunities."
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Policy Advocacy" secondary="To work closely with government bodies to advocate for blockchain-friendly regulations that promote growth and innovation." />
				</ListItem>
				<ListItem>
					<ListItemText
						primary="Research & Development"
						secondary="To conduct research on emerging blockchain trends and technologies, ensuring Bangladesh stays ahead in the global blockchain race."
					/>
				</ListItem>
			</List>

			{/* Key Initiatives */}
			<Typography variant="h5" gutterBottom>
				Key Initiatives
			</Typography>
			<List>
				<ListItem>
					<ListItemText
						primary="Blockchain Training & Certification Programs"
						secondary="Providing professional training and certification for individuals looking to enhance their knowledge of blockchain technology."
					/>
				</ListItem>
				<ListItem>
					<ListItemText primary="Industry Forums & Conferences" secondary="Hosting regular events and forums to bring together blockchain professionals, businesses, and policymakers." />
				</ListItem>
				<ListItem>
					<ListItemText primary="Collaborative Blockchain Research" secondary="Partnering with universities and research institutes to explore blockchain applications in various industries." />
				</ListItem>
			</List>

			{/* Leadership */}
			<Typography variant="h5" gutterBottom>
				Leadership
			</Typography>
			<Typography variant="body1" paragraph>
				Our leadership team comprises experienced professionals from diverse sectors, bringing expertise in blockchain, technology, finance, and government relations. Together, they drive our mission
				of fostering blockchain innovation in Bangladesh.
			</Typography>

			{/* Join Us */}
			<Divider sx={{ marginY: 4 }} />
			<Typography variant="h6" gutterBottom>
				Join Us
			</Typography>
			<Typography variant="body1" paragraph>
				As a member of the Bangladesh Blockchain Association, you will have access to a wealth of resources, industry insights, and a supportive community of blockchain enthusiasts.
			</Typography>
		</Box>
	);
};

export default page;
