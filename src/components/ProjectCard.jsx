import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ProjectCard = ({
	imgUrl,
	title,
	description,
	sourceCodeURL,
	demoURL,
	plang
}) => {
	return (
		<div>
			<div
				className="h-52 md:h-72 rounded-t-xl relative group"
				style={{ background: `url(${imgUrl})`, backgroundSize: 'cover' }}>
				<div className="overlay items-center justify-center gap-5 absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
					<Link
						href={sourceCodeURL}
						target="_blank"
						className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white">
						<CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
					</Link>
					{demoURL && (
						<Link
							href={demoURL}
							target="_blank"
							className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white">
							<EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:text-white" />
						</Link>
					)}
				</div>
			</div>
			<div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 ">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<div className="flex flex-wrap gap-2 my-2">
					{plang.map((lang, i) => {
						return (
							<span key={i} className="text-xs font-medium px-2.5 py-0.5 rounded-md border">{lang}</span>
						)
					})}
				</div>
				<p className="text-[#ADB7BE]">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
