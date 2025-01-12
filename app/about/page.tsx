import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me and my work.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-medium mb-6">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-4">
          Welcome to my portfolio! I am a passionate developer dedicated to
          creating meaningful digital experiences.
        </p>
        {/* Add more content here */}
      </div>
    </div>
  );
}
