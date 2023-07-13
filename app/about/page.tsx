import { Card } from "@/components/ui/card";
import ALink from "../Components/ALink";

export default function About() {
    return <div className="mt-16 mx-16"><div className="flex justify-between">
        
        <ALink link="/">← Go Back</ALink>
        <div className="font-bold text-2xl text-center mb-7">In regards to</div>
    </div>
        <Card className="p-4 2xl:mx-[400px] xl:mx-[300px] lg:mx-[200px] mb-8">
        Hey, I'm Happy Jangir and I'm a computer science and engineering graduate with a passion for technology and a strong skill set. I have experience working both independently and in teams, and I thrive on collaborating and finding innovative solutions. My technical expertise includes programming languages like Java, C++, and Python, as well as web development technologies. 
        <br /><br />
        I have completed personal projects that have allowed me to apply my skills and gain real-world experience. I'm a problem solver with excellent analytical abilities and a commitment to staying up-to-date with the latest advancements in the field. I value clear communication and believe in fostering a collaborative and inclusive work environment. I'm excited to contribute my skills and knowledge to a forward-thinking organization. Thank you for visiting my portfolio, and I look forward to connecting with you.
        </Card>

        <span><ALink link="/Resume.pdf" target="_blank">↓ Resume</ALink></span>
    </div>
}