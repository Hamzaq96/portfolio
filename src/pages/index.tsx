// Root page of the app
import Image from "next/image";
// import "@/main.scss";
import "@/app/globals.css";
// import Skills from "@/components/organisms/skills";
import Projects from "./projects";
import Skills from "./skills";
export const Home = () => {
    return (
        <>
            <div className="h-16 md:hidden"></div>
            <section className="home">
                <div className="hero-container flex flex-col md:flex-row items-center justify-center p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-8">
                    <Image 
                        src="/picture3.jpeg" 
                        alt="Hamza's Profile Picture" 
                        className="profile-img rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80" 
                        width={300} 
                        height={300} 
                    />
                    <div className="hero-text text-center md:text-left max-w-2xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Hey, {"I'm Hamza Qureshi"}</h1>
                        <p className="text-sm md:text-base lg:text-lg">
                            Innovative Software Engineer with a dynamic 5-year background in Agile software development. 
                            Adept at delivering high-impact projects independently and collaboratively, 
                            consistently surpassing deadlines and budgetary expectations. 
                            Passionate about pushing the boundaries of technology to tackle real-world challenges, 
                            showcasing a keen ability to leverage emerging technologies with precision through advanced programming skills. 
                            Committed to driving excellence and staying ahead of industry trends to bring fresh perspectives and innovation to every project. 
                            Ready to contribute expertise and enthusiasm to a forward-thinking team.
                        </p>
                    </div>
                </div>
            </section>
            <div className="skills-container">
                <Skills />
            </div>
            <Projects />
        </>
    );
};

export default Home;