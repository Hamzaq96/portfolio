import { projectData } from "@/components/organisms";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export const Projects = () => {
    return (
        <div className="projects-container">
            <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Featured Projects</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {projectData && projectData.map((project) => (
                            <Card className="bg-gray-800 border-gray-700 flex flex-col">
                                <CardHeader>
                                <CardTitle className="text-xl font-bold text-white">{project.title}</CardTitle>
                                <CardDescription>{project.intro}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-sm text-gray-400 mb-4">
                                        {project.description}
                                    </p>
                                </CardContent>
                                <CardContent className="mx-auto">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, index) => (
                                            <Badge key={index} variant="secondary" className="text-xs">{tech}</Badge>
                                        ))}
                                    </div>
                                    {project.liveLink !== '' || project.gitHubLink !== '' ? (
                                        <div className="flex justify-center gap-4">
                                            {project.liveLink !== '' && (
                                                <Button size="sm" asChild>
                                                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="mr-2 h-4 w-4" />
                                                        Live Demo
                                                    </Link>
                                                </Button>
                                            )}
                                            {project.gitHubLink !== '' && (
                                                <Button variant="outline" size="sm" asChild>
                                                    <Link href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                                                        <Github className="mr-2 h-4 w-4" />
                                                        GitHub
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    ) : null}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            {/* <h2>Projects</h2>
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
                            </div>
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Projects;