import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of project one.",
    slug: "project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of project two.",
    slug: "project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of project three.",
    slug: "project-three",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A brief description of project four.",
    slug: "project-four",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <Card className="mb-16">
        <CardContent className="flex justify-between items-start p-6">
          <div>
            <h1 className="text-4xl font-medium mb-2">Your Name</h1>
            <p className="text-lg text-muted-foreground">
              Full Stack Developer
            </p>
          </div>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com" target="_blank">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:your.email@example.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <section>
        <h2 className="text-3xl font-semibold mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <Link href={`/projects/${project.slug}`}>
                <Button>View Project</Button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
