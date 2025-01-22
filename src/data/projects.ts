interface Project {
	title: string;
	image: string;
	description: string;
	github?: string;
	demo?: string;
	tags: string[];
}

export const projects: Project[] = [
	{
		title: "CRM Dashboard: School Management System",
		image: "/dashboard.png",
		description:
			"The CRM Dashboard for School Management System is a modern web application tailored to simplify administrative tasks for schools. It provides intuitive modules for managing students, teachers, classes, schedules, and more. With a focus on scalability and user experience, the dashboard is ideal for administrators seeking a centralized solution for seamless school operations.",
        github: "https://github.com/theactualdev/crm-dashboard",
		demo: "https://schoolcrm-dashboard.vercel.app/admin",
		tags: ["Next.js", "TypeScript", "Tailwind CSS"],
	},
    {
		title: "GPA Calculator",
		image: "/gpa.png",
		description:
			"The GPA Calculator is a lightweight tool that simplifies the process of calculating GPAs. Users can dynamically add courses, input grades and credit hours, and instantly view their GPA results. Designed for accessibility and performance, the app offers a seamless experience across devices, ensuring it's perfect for students at any educational level.",
		tags: ["Vite", "ReactJS", "Tailwind CSS", "TypeScript"],
        demo: "https://theactual-gpa.vercel.app/",
        github: "https://github.com/theactualdev/theactualGPA",
	},
	{
		title: "Dutiful: Landing Page",
		image: "/dutiful.png",
		description:
			"The Dutiful Landing Page is a professional, lightweight, and highly optimized web page that serves as the face of the Dutiful platform. Built to attract and inform users, the page is designed with a focus on clarity, responsiveness, and a seamless user experience across all devices.",
		github: "https://github.com/theactualdev/dutiful",
		demo: "https://github.com/theactualdev/dutiful",
		tags: ["Vite", "ReactJS", "TailwindCSS", "Typescript"],
	},
];