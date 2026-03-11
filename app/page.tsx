import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { JourneyTimeline } from "@/components/portfolio/journey-timeline";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Achievements } from "@/components/portfolio/achievements";
import { InternshipSection } from "@/components/portfolio/internship-section";
import { CertificationsSection } from "@/components/portfolio/certifications-section";
import { Education } from "@/components/portfolio/education";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <JourneyTimeline />
      <Skills />
      <Projects />
      <Achievements />
      <InternshipSection />
      <CertificationsSection />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}