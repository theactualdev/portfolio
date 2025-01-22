import { experience, skills } from "@/data/experience";
import Image from "next/image";
import { FaCss3, FaGithub, FaHtml5 } from "react-icons/fa";

const Experience = () => {
	return (
		<div id="services" className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-20 mb-7">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
				{/* Skills Section */}
				<div>
					<h2 className="text-3xl sm:text-4xl font-semibold mb-3 md:mb-5">Skills | Services</h2>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
						{skills.map((skill) => (
							<div
								key={skill.name}
								className="p-4 bg-gray-50 cursor-pointer rounded-lg hover:bg-gray-100 transition-colors hover:scale-105 duration-300"
							>
								<h3 className="font-semibold text-lg">{skill.name}</h3>
							</div>
						))}
					</div>
					<div className="relative mt-5 max-w-[300px] overflow-hidden">
						<div className="flex gap-6 animate-scroll">
							<FaHtml5 size={20} />
							<FaCss3 size={20} />
							<Image alt="Typescript Icon" width={20} height={20} src="/typescript.svg" />
							<Image alt="Javascript Icon" width={20} height={20} src="/javascript.svg" />
							<Image alt="React Icon" width={20} height={20} src="/react.svg" />
							<Image alt="Next Icon" width={20} height={20} src="/next.ico" />
							<Image alt="Tailwind Icon" width={20} height={20} src="/tailwind-css.svg" />
							<Image alt="Shadcn Icon" width={32} height={28} src="/shadcn.png" />
							<Image alt="Git Icon" width={20} height={20} src="/git.svg" />
							<Image alt="Figma Icon" width={20} height={20} src="/figma.svg" />
							<Image alt="Vite Icon" width={20} height={20} src="/vite.png" />
							<FaGithub size={20} />
							<FaHtml5 size={20} />
							<FaCss3 size={20} />
							<Image alt="Typescript Icon" width={20} height={20} src="/typescript.svg" />
							<Image alt="Javascript Icon" width={20} height={20} src="/javascript.svg" />
							<Image alt="React Icon" width={20} height={20} src="/react.svg" />
							<Image alt="Next Icon" width={20} height={20} src="/next.ico" />
							<Image alt="Tailwind Icon" width={20} height={20} src="/tailwind-css.svg" />
							<Image alt="Shadcn Icon" width={32} height={28} src="/shadcn.png" />
							<Image alt="Git Icon" width={20} height={20} src="/git.svg" />
							<Image alt="Figma Icon" width={20} height={20} src="/figma.svg" />
							<Image alt="Vite Icon" width={20} height={20} src="/vite.png" />
							<FaGithub size={20} />
						</div>
					</div>
				</div>

				{/* Experience Section */}
				<div>
					<h2 className="text-3xl sm:text-4xl font-semibold mb-3 md:mb-5">Experience</h2>
					<div className="space-y-8">
						{experience.map((exp, index) => (
							<div key={index}>
								<span className="text-sm text-gray-500">{exp.period}</span>
								<h3 className="font-semibold text-xl mt-1">{exp.role}</h3>
								<h4 className="text-blue-600 text-lg">{exp.company}</h4>
								<p className="text-gray-600 mt-2">{exp.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
