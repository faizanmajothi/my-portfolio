import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Stats from "../components/Stats";
import About from "../components/About";
import Skill from "../components/Skill";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Skill />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
