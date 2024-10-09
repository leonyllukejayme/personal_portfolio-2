'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './NavLink';

const Navbar = () => {
	const navlinks = [
		{
			title: 'About',
			path: '#about',
		},
		{
			title: 'Projects',
			path: '#projects',
		},
		{
			title: 'Contact',
			path: '#contact',
		},
	];
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-50">
			<div className="container flex flex-wrap items-center justify-between mx-auto p-6">
				<Link
					href={'/'}
					className="text-2xl md:text-5xl font-semibold text-white">
					<Image src={'/logo.png'} alt="Logo" height={40} width={40} />
				</Link>
				{/* hamburger-button */}
				<div className="block md:hidden">
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className="text-slate-200 hover:text-white">
							<Bars3Icon className="size-6" />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className="text-slate-200 hover:text-white">
							<XMarkIcon className="size-6" />
						</button>
					)}
				</div>

				{/* menu */}
				<div className="hidden md:block md:w-auto" id="navbar">
					<ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0">
						{navlinks.map((navlink, index) => {
							return (
								<li key={index}>
									<NavLink title={navlink.title} href={navlink.path} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>

			{/* mobile-menu */}
			{navbarOpen ? (
				<ul className="flex flex-col py-4 items-center">
					{navlinks.map((navlink, index) => {
						return (
							<li key={index}>
								<NavLink title={navlink.title} href={navlink.path} />
							</li>
						);
					})}
				</ul>
			) : null}
		</nav>
	);
};

export default Navbar;
