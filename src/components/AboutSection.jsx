'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useTransition } from 'react';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className="list-disc pl-2">
				<li>React</li>
				<li>Nextjs</li>
				<li>Bootstrap</li>
				<li>Tailwind</li>
				<li>Python</li>
				<li>PHP</li>
				<li>Expressjs</li>
				<li>Laravel</li>
				<li>MongoDB </li>
				<li>MySQL</li>
				<li>PostgreSQL</li>
			</ul>
		),
	},
	{
		title: 'Certification',
		id: 'certification',
		content: (
			<ul className="list-disc pl-2">
				<li>The Complete 2023 Web Development Bootcamp</li>
				<li>The JavaScript Complete Guide Course</li>
				<li>DICT-WD002 Using HTML and CSS to Design a Website</li>
				<li>DICT-WD003 Basic Javascript for Web Development</li>
				<li>TypeScript for Beginners: Mastering TypeScript Fundamentals</li>
				<li>Learn Basic Statistics with Python</li>
				<li>Introduction to SQL</li>
				<li>Intermediate SQL</li>
			</ul>
		),
	},
];

const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const variants = {
		initial: { y: -50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section ref={ref} id="about" className="text-white">
			<motion.div
				variants={variants}
				initial="initial"
				animate={isInView ? 'animate' : 'initial'}
				transition={{ durration: 0.3, delay: 1 * 0.5 }}
				className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image
					src={'/ab.jpg'}
					alt=""
					width={500}
					height={500}
					className="rounded-xl"
				/>
				<div className="mt-10">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base md:text-lg">
						I&apos;m a Highly motivated web developer with a passion for
						creating responsive and visually appealing websites, equipped with a
						solid foundation in HTML, CSS, JavaScript and more, and a strong
						commitment to continuous learning and innovation.
					</p>
					<div className="flex flex-row mt-8 gap-5">
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}>
							Skills
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('certification')}
							active={tab === 'certification'}>
							Certifications
						</TabButton>
					</div>
					<div className="mt-8">
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default AboutSection;
