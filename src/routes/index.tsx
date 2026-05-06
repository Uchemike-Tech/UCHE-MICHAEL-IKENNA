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
      { title: "Uche Michael Ikenna — Web Developer | AI & ML Engineer | Data Analyst" },
      {
        name: "description",
        content:
          "Uche Michael Ikenna is a web developer, AI & ML engineer, and data analyst with 6+ years of experience building intelligent systems, automation, dashboards, and full-stack web apps.",
      },
      {
        name: "keywords",
        content:
          "Uche Michael Ikenna, Uchemike-Tech, web developer, AI engineer, machine learning, data analyst, React, Node.js, Power BI, Python",
      },
      { property: "og:title", content: "Uche Michael Ikenna — Web Developer | AI/ML Engineer | Data Analyst" },
      {
        property: "og:description",
        content: "Portfolio of Uche Michael Ikenna: web apps, machine learning solutions, automation, and analytics.",
      },
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
