import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Server } from "lucide-react"

const Skills = () => {
    return (
        <div className="skills-container">
            <section id="skills" className="w-full py-12 md:py-24 lg:py-42 bg-gray-800" style={{ width: '99.5vw', marginLeft: 'calc(-50vw + 50%)' }}>
            {/* <section id="skills" className="w-full py-12 md:py-24 lg:py-42"> */}
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Technical Skills</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="bg-gray-700 border-gray-600">
                        <CardHeader>
                        <CardTitle className="flex items-center">
                            <Code className="mr-2 h-5 w-5" />
                            Frontend Development
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                        <div className="flex flex-wrap gap-2">
                            <Badge>Next.js</Badge>
                            <Badge>Angular</Badge>
                            <Badge>React</Badge>
                            <Badge>TypeScript</Badge>
                            <Badge>Tailwind CSS</Badge>
                            <Badge>Shadcn UI</Badge>
                        </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600">
                        <CardHeader>
                        <CardTitle className="flex items-center">
                            <Server className="mr-2 h-5 w-5" />
                            Backend Development
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                        <div className="flex flex-wrap gap-2">
                            <Badge>Node.js</Badge>
                            <Badge>Python</Badge>
                            <Badge>Javascript</Badge>
                            <Badge>Go</Badge>
                            <Badge>AI Development</Badge>
                            <Badge>RESTful APIs</Badge>
                        </div>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-700 border-gray-600">
                        <CardHeader>
                        <CardTitle className="flex items-center">
                            <Database className="mr-2 h-5 w-5" />
                            Database & DevOps
                        </CardTitle>
                        </CardHeader>
                        <CardContent>
                        <div className="flex flex-wrap gap-2">
                            <Badge>PostgreSQL</Badge>
                            <Badge>MongoDB</Badge>
                            <Badge>Redis</Badge>
                            <Badge>Docker</Badge>
                            <Badge>Kubernetes</Badge>
                            <Badge>CI/CD</Badge>
                        </div>
                        </CardContent>
                    </Card>
                    </div>
                </div>
                </section>
        </div>
    )
}

export default Skills;