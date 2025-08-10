import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
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
	{ name: "Book A Meeting!", id: "https://calendly.com/olayinkacodes", isExternal: true },
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
	{
		icon: BiCalendar,
		href: "https://calendly.com/olayinkacodes",
		label: "Book a Meeting",
	}
];