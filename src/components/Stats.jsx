import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const stats = [
    { label: "Years Experience", value: 2, suffix: "+" },
    { label: "Projects Delivered", value: 30, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
  ];

  return (
    <section className="px-6 md:px-20 pt-20 pb-0 overflow-hidden">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-4xl font-bold text-primary">
              <Counter value={s.value} />
              {s.suffix}
            </h3>
            <p className="text-gray-400 mt-2 mb-0 text-lg">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
