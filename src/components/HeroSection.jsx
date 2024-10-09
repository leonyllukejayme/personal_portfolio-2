'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-12">
			<motion.div
				initial={{ opacity: 0, y: -60 }}
				animate={{ opacity: 1, y: 0 , scale: 1 }}
				transition={{ durration: 0.5 }}
				className="col-span-8 place-self-center grid lg:place-items-start w-full justify-self-start">
				<h1 className="text-white mb-4 text-center sm:text-left text-4xl lg:text-7xl lg:leading-normal font-extrabold">
					<span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
						Hello I&apos;m{' '}
					</span>
					<br />
					<TypeAnimation
						sequence={['LeoPikapool', 1000, 'a Web Developer', 1000]}
						wrapper="span"
						speed={50}
						repeat={Infinity}
					/>
				</h1>
				<p className="text-[#adb7be] mb-6 text-center sm:text-left text-base sm:text-lg lg:text-xl">
					Coding the future, one project at a time.
				</p>
				<div className="flex flex-col lg:flex-row gap-3">
					<Link href={"#contact"} className="text-white text-center bg-gradient-to-r from-primary-500 to-primary-700 px-6 py-3 hover:bg-slate-200 rounded-full">
						Hire Me
					</Link>
					<Link href={"https://drive.google.com/uc?export=download&id=1RTqfTAHoaBUaEG1-yGL6OTDPWSLyW0RC"} className="text-white text-center bg-gradient-to-r from-primary-500 to-primary-700 px-1 py-1 rounded-full">
						<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
							Download CV
						</span>
					</Link>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ durration: 0.5 }}
				className="col-span-4 place-self-center mt-4 lg:mt-0">
				<div className="rounded-full bg-[#181818] w-[250px] h-[250px]  lg:w-[350px] lg:h-[350px] relative">
					<Image
						src="/hero.png"
						className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						alt="hero image"
						height={300}
						width={300}
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default HeroSection;
