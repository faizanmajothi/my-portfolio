import { motion } from "framer-motion";

export const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="h-full flex flex-col justify-between  rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6"
    >
      {/* Quote */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        “{testimonial.feedback}”
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-sky-400/20 flex items-center justify-center text-sky-400 font-semibold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
          <p className="text-xs text-gray-400">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
