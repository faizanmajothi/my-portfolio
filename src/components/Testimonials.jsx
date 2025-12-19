import { motion } from "framer-motion";
import { TestimonialCard } from "../util/TestimonialCard ";
const testimonials = [
  {
    name: "John Carter",
    role: "Product Manager",
    company: "SaaS Startup",
    feedback:
      "Faizan delivered a highly performant and clean frontend solution. The UI was smooth, scalable, and exceeded our expectations.",
  },
  {
    name: "Sarah Williams",
    role: "Founder",
    company: "Digital Agency",
    feedback:
      "Working with Faizan was a great experience. He understands modern frontend architecture and always focuses on performance and usability.",
  },
  {
    name: "Michael Brown",
    role: "Tech Lead",
    company: "Web Platform",
    feedback:
      "Excellent attention to detail and clean code. The final product was fast, responsive, and production-ready.",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 md:px-20 py-24 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14  text-center"
      >
        <h2 className="md:text-4xl text-3xl font-bold mb-5 transform transition-all duration-1000 delay-200">What People Say</h2>
        <p className="text-lg text-violet-200/90 leading-relaxed max-w-2xl mx-auto transform transition-all duration-1000 delay-400 ">
          Feedback from clients and collaborators I’ve worked with on modern,
          <br /> performance-driven web projects.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <TestimonialCard key={i} testimonial={item} />
        ))}
      </div>
    </section>
  );
}
