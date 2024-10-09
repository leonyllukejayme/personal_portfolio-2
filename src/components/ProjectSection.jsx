'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { projectData } from './projectData';

const ProjectSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};
	return (
		<section id="projects">
			<br />
			<br />
			<br />
			<h2 className="text-center text-white text-4xl font-bold mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div
				ref={ref}
				className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
				{projectData.map((project, index) => {
					return (
						<motion.div
							variants={cardVariants}
							initial="initial"
							animate={isInView ? 'animate' : 'initial'}
							transition={{ durration: 0.3, delay: index * 0.5 }}
							key={index}>
							<ProjectCard
								key={project.id}
								title={project.title}
								description={project.description}
								imgUrl={project.projImg}
								sourceCodeURL={project.sourceCodeURL}
								demoURL={project.demoURL}
							/>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default ProjectSection;
