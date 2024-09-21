import { projectData } from "@/components/organisms";

export const Projects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectData && projectData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-header">
                            <i className="fa-regular fa-folder-open folder-icon"></i>
                            <div className="small-icon">
                                {project.gitHubLink !== '' ? (<a target="_blank" href={project.gitHubLink} rel="noopener norefferer"><i className="fa-brands fa-github"></i></a>)
                                : (
                                    <a target="_blank" href={project.liveLink} rel="noopener norefferer"><i className="fa-solid fa-link"></i></a>
                                )}
                                {/* {project.gitHubLink === '' && <a target="_blank" href={project.liveLink} rel="noopener norefferer"><i className="fa-solid fa-link"></i></a>} */}
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;