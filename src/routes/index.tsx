import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michael Uche — AI/ML Engineer, Web Developer & Data Analyst" },
      {
        name: "description",
        content:
          "Michael Ikenna Uche is an AI/ML engineer and data analyst building intelligent systems, ETL pipelines, and analytics that drive 30–50% efficiency gains.",
      },
      { property: "og:title", content: "Michael Uche — AI/ML Engineer & Data Analyst" },
      { property: "og:description", content: "Portfolio of Michael Uche: machine learning, automation, and analytics projects." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
