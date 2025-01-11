import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
      <p className="text-muted-foreground mb-8">
        Sorry, the project you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/projects">
        <Button>Return to Projects</Button>
      </Link>
    </div>
  );
}
