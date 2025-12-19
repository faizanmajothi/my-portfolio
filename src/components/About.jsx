import { motion } from "framer-motion";
import TiltedCard from "../util/TiltedCard";
import { FaLaptopCode, FaRocket } from "react-icons/fa";
import aboutme from "/src/assets/img/about.png"

export default function About() {
  const services2 = [
    {
      icon: <FaLaptopCode size={20} />,
      title: "Business Websites",
      desc: "Modern, fast websites focused on conversion and clarity.",
    },
    {
      icon: <FaRocket size={20} />,
      title: "Landing Pages",
      desc: "High-converting pages for ads and lead generation.",
    },
  ];
  return (
    <section id="about" className="px-6 md:px-20 py-24 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 ">
        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className={"md:h-[70vh] "}
        >
          <TiltedCard customCSS="cover-full">
            <img
              src={aboutme}
              alt="Work"
              className="rounded-2xl w-full h-full"
            />
          </TiltedCard>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-5">About Me</h2>
          <p className="text-gray-400 text-lg">
            I’m Faizan Majothi, a software developer with 2+ years of experience
            building fast, modern web applications using React. I focus on clean
            code, responsive UI, and performance optimization to deliver
            scalable digital experiences.
          </p>
          <div className="flex justify-center gap-5 mt-5 md:flex-row flex-col">
            {services2.map((s, i) => (
              <div className="p-5 rounded-xl border border-slate-700 bg-slate-900 hover:border-primary transition">
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-primary me-2 rounded-full">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>

                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-5 hidden sm:block bg-primary backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-700 gentle-animation cursor-pointer"
          >
            Book a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
