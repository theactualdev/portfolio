import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export interface Links{
	name: string;
	id: string;
	isExternal: boolean;
}

export const links: Links[] = [
	{ name: "About", id: "about", isExternal: false },
	{ name: "Contact", id: "contact", isExternal: false },
    {name: "Projects", id: "portfolio", isExternal: false},
	{
		name: "Resume",
		id: "/resume.pdf",
		isExternal: true,
	},
	{ name: "Skills", id: "services", isExternal: false },
];

interface Socials {
	icon: React.ElementType;
	href: string;
	label: string;
}

export const socials: Socials[] = [
	{
		icon: FaGithub,
		href: "https://github.com/theactualdev",
		label: "GitHub",
	},
	{
		icon: RiTwitterXFill,
		href: "https://x.com/theactualdev",
		label: "Twitter",
	},
	{
		icon: FaLinkedin,
		href: "https://www.linkedin.com/in/theactualdev/",
		label: "LinkedIn",
	},
];