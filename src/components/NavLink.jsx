import Link from "next/link";

const NavLink = ({title,href}) => {
	return (
		<Link
			href={href}
			className="block py-2 text-[#adb7be] sm:text-xl rounded md:bg-transparent md:p-0 hover:text-white ">
			{title}
		</Link>
	);
};

export default NavLink;
