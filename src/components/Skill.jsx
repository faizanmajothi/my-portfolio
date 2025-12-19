import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const VerticalMarquee = ({ items, direction = "up" }) => {
  const duration = 20;

  return (
    <div className="relative h-[420px] overflow-hidden marquee-mask">
      <motion.div
        className="flex flex-col gap-6"
        animate={{
          y: direction === "up" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Repeat items enough times to fill height */}
        {[...items, ...items, ...items].map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
      </motion.div>
    </div>
  );
};
const SkillItem = ({ skill }) => (
  <div className="flex md:flex-row flex-col  items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10">
    <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
    <span className="text-sm text-white">{skill.name}</span>
  </div>
);

export default function Skill() {
  const sectionRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobileMenuOpen(true);
    } else {
      setIsMobileMenuOpen(false);
    }
  }, [isMobileMenuOpen]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const skills = [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "Wordpress", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "Shopify", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
    { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS", icon: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Android", icon: "https://cdn.simpleicons.org/android/3DDC84" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4" },
    { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  ];

  // Parallax for left content
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="px-6 md:px-20 py-24 bg-slate-900 overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* 🔹 LEFT (STICKY + PARALLAX) */}
        <motion.div
          style={{ y: leftY, opacity: leftOpacity }}
          className="md:sticky md:top-32"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            My Expertise Areas Where Gained Skills
          </h2>

          <p className="text-gray-400 text-lg max-w-md">
            I specialize in building modern, scalable web experiences using
            clean architecture, performance-focused development, and
            user-centric design principles.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 hidden sm:inline-flex bg-primary text-white 
                       font-semibold px-6 py-3 rounded-md 
                       hover:bg-primary-700 transition"
          >
            Book a Call
          </motion.button>
        </motion.div>

        {/* 🔹 RIGHT (SCROLLING CONTENT) */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 marquee-track rounded-xl 
                     border border-slate-700 bg-slate-900 
                     hover:border-primary transition"
        >
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-4 p-6">
            <VerticalMarquee items={skills.slice(0, 4)} direction="up" />
            <VerticalMarquee items={skills.slice(3, 7)} direction="down" />
            {!isMobileMenuOpen && (
              <VerticalMarquee items={skills.slice(6, 10)} direction="up" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
