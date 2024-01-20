'use client';

import { env } from '@/config/config';
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';
import { FormEventHandler, useRef } from 'react';

export default function Contact() {
	const form = useRef<any>();

	const sendEmail: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();

		const target = e.target as any;

		const templateParams = {
			from_name: target.from_name.value,
			to_email: env.email,
			from_email: target.from_email.value,
			message: target.message.value,
		};

		emailjs.send(env.emailServiceID, env.email_template_id, templateParams, env.emaiPublicKey).then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	};
	return (
		<div className="my-16">
			<p className="sectionTitle mb-16">Contact Us</p>

			<form ref={form} onSubmit={sendEmail}>
				<div className="flex flex-col gap-8">
					<TextField className="w-full" id="outlined-basic" placeholder="john@doe.com" label="Email" variant="outlined" name="from_email" />
					<div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
						<TextField className="w-full lg:w-1/2" id="outlined-basic" placeholder="John Doe.com" label="Name" variant="outlined" name="from_name" />
						<TextField className="w-full lg:w-1/2" id="outlined-basic" placeholder="Contribute in an event" label="Subject" variant="outlined" name="subject" />
					</div>
					<TextField className="w-full" id="outlined-multiline-static" label="Message" multiline rows={8} name="message" />
					<input type="submit" className="primary-btn mx-auto" />
				</div>
			</form>
		</div>
	);
}
