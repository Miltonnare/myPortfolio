import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { GitHubRepos } from "@/components/github-repos";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <TrustStrip />
      <About />
      <Skills />
      <Projects />
      <GitHubRepos />
      <Contact />
    </main>
  );
}
