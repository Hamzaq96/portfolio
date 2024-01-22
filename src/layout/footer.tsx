import { GraphicLink } from "@/components/atoms";

export const Footer = () => {
    return (
       <>
        <hr />
        <div className="footer-container">
            <p>
                @ {new Date().getFullYear()} {"Hamza's Portfolio"}
            </p>
            <div className="social_icons">
                <a 
                    href="https://github.com/Hamzaq96"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a 
                    href="https://www.linkedin.com/in/hamza-qureshi-98373115a/"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
       </> 
    );
};