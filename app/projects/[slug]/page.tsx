import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  overview: string;
};

type Projects = {
  [key: string]: Project;
};

// This would typically come from a database or CMS
const projects: Projects = {
  "project-one": {
    title: "Project One",
    description: "A detailed description of project one.",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    overview:
      "Project one is a comprehensive web application that showcases modern web development practices.",
  },
  "project-two": {
    title: "Project Two",
    description: "A detailed description of project two.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    overview:
      "Project two is a full-stack application that demonstrates database integration and API development.",
  },
  "project-three": {
    title: "Project Three",
    description: "A detailed description of project three.",
    technologies: ["Python", "Django", "PostgreSQL", "React"],
    overview:
      "Project three is a data-driven application that processes and visualizes complex datasets.",
  },
  "project-four": {
    title: "Project Four",
    description: "A detailed description of project four.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "TypeScript"],
    overview:
      "Project four is a real-time application that leverages cloud services for scalability.",
  },
};

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = projects[params.slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/projects">
          <Button variant="outline" className="mb-6">
            ← Back to Projects
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">
          {project.description}
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-lg">{project.overview}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
