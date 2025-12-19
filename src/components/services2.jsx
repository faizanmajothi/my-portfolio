import { FaLaptopCode, FaRocket, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
export default function Services() {

  const services2 = [
    {
      icon: <FaLaptopCode size={28} />,
      title: "Business Websites",
      desc: "Modern, fast websites focused on conversion and clarity.",
    },
    {
      icon: <FaRocket size={28} />,
      title: "Landing Pages",
      desc: "High-converting pages for ads and lead generation.",
    },
    {
      icon: <FaMobileAlt size={28} />,
      title: "Frontend Development",
      desc: "Scalable React & Next.js interfaces.",
    },
  ];

  return (
    <section
      id="services"
      className="px-6 md:px-20 py-24 relative"
      style={{
        background:
          "linear-gradient(135deg, #2d1810 0%, #1a0f08 30%, #0f0704 60%, #1a0f08 100%)",
        overflow: "visible",
      }}
    >
      <h2 className="text-3xl font-bold mb-14">Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services2.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="p-8 rounded-xl border border-slate-700 bg-slate-900 hover:border-primary transition"
          >
            <div className="text-primary mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
