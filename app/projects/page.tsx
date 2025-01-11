import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of projects and work.",
};

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

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <Link href={`/projects/${project.slug}`}>
              <Button>View Project</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
