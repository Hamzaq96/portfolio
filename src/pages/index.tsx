// Root page of the app
import Image from "next/image";
// import "@/main.scss";
import "@/app/globals.css";
import Skills from "@/components/organisms/skills";

export const Home = () => {
    return (
        <>
            <section className="home">
                <div className="hero-container">
                    <Image src="/picture3.jpeg" alt="Hamza's Profile Picture" className="profile-img" width={300} height={300} />
                </div>
                <div>
                    <h1>Hey, {"I'm Hamza"}</h1>
                    <p>
                    Innovative Software Engineer with a dynamic 4-year background in Agile software development. 
                    Adept at delivering high-impact projects independently and collaboratively, 
                    consistently surpassing deadlines and budgetary expectations. 
                    Passionate about pushing the boundaries of technology to tackle real-world challenges, 
                    showcasing a keen ability to leverage emerging technologies with precision through advanced programming skills. 
                    Committed to driving excellence and staying ahead of industry trends to bring fresh perspectives and innovation to every project. 
                    Ready to contribute expertise and enthusiasm to a forward-thinking team.
                    </p>
                </div>
            </section>
            <div>
                <Skills />
            </div>
        </>
    );
};

export default Home;