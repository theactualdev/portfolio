"use client";

import { Cardo } from "next/font/google";

const cardo = Cardo({
    weight: ["400", "700"],
    subsets: ["latin"],
})

const About = () => {
    return(
        <div id="about" className="px-4 sm:px-20 md:px-24 lg:px-32 mt-10 md:mt-4 mb-10">
            <div>
                <h2 className="text-lg uppercase tracking-wider text-gray-600">
                    about me
                </h2>
                <div className="w-20 h-[2px] bg-gray-500"></div>
            </div>

            <h1 className={`${cardo.className} text-xl sm:text-2xl md:text-3xl font-bold pt-5 leading-10`}>
                I&apos;m a Software Engineer ( Frontend Intensive ) with 2+ years of experience specializing in React.js, TypeScript, and Next.js. Focused on UI/UX optimization, boosting user satisfaction scores, and
                committed to delivering clean, maintainable code.
            </h1>
        </div>
    )
}

export default About;