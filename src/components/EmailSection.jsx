'use client';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Socials from './Socials';

const EmailSection = () => {
	const form = useRef();

	const [emailSubmitted, setEmailSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
				process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					console.log('SUCCESS!');
					setEmailSubmitted(true);
					form.current.reset();
				},
				(error) => {
					console.log('FAILED...', error.text);
				}
			);
	};

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const variants = {
		initial: { y: -50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};
	const variants2 = {
		initial: { x: 50, opacity: 0 },
		animate: { x: 0, opacity: 1 },
	};

	return (
		<section
			ref={ref}
			id="contact"
			className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-7 relative">
			<div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full blur-xl top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
			<motion.div
				variants={variants}
				initial="initial"
				animate={isInView ? 'animate' : 'initial'}
				transition={{ durration: 0.3, delay: 1 * 0.5 }}
				className="z-0">
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					{' '}
					I&apos;m currently looking for new opportunities, my inbox is always
					open. Whether you have a question or just want to say hi, I&apos;ll
					try my best to get back to you!
				</p>
				<Socials />
			</motion.div>
			<motion.div
				variants={variants2}
				initial="initial"
				animate={isInView ? 'animate' : 'initial'}
				transition={{ durration: 0.3, delay: 1 * 0.5 }}
				className="">
				<form ref={form} onSubmit={handleSubmit} className="flex flex-col">
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block mb-2 text-sm font-medium">
							Your Email
						</label>
						<input
							type="email"
							name="email"
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="example@example.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="text-white block mb-2 text-sm font-medium">
							Subject
						</label>
						<input
							type="text"
							name="subject"
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Hello There"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block mb-2 text-sm font-medium">
							Message
						</label>
						<textarea
							rows="5"
							name="message"
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Let's Talk About ..."
						/>
					</div>
					<div className="mb-6">
						<button
							type="sumbit"
							className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
							Send Message
						</button>
					</div>
					{emailSubmitted && (
						<p className="text-green-500 mt-2 text-sm">
							Email Sent Sucessfully!
						</p>
					)}
				</form>
			</motion.div>
		</section>
	);
};

export default EmailSection;
