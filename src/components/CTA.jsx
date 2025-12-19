import { motion } from "framer-motion";
import MyCal from "../util/MyCal";
export default function CTA() {
  return (
    <section id="contact" className="px-6 md:px-20 py-24 bg-[#020617] relative overflow-hidden">
      <div className="">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="md:text-4xl text-3xl font-bold mb-5 transform transition-all duration-1000 delay-200">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-violet-200/90 leading-relaxed max-w-2xl mx-auto transform transition-all duration-1000 delay-400">
            Book a free 30-minute discovery call and let’s discuss how we can
            build a fast, scalable, and modern web experience for your business.
          </p>
        </motion.div>

        {/* Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 pb-0 overflow-hidden"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-xl font-black">Discovery Call</h3>
              <p className="text-muted-foreground text-sm">
                30 min · Video call · Free
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Available slots this week
            </div>
          </div>

          {/* Calendar */}
          <div className="mt-5">
            <MyCal></MyCal>
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-500/10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/15 flex items-center justify-center mx-auto mb-6">
                  <div className="w-7 h-7 rounded-full bg-sky-400" />
                </div>
                <h4 className="text-lg font-black text-white mb-2">
                  Project Discussion
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Share your vision and requirements, and  Guide you toward
                  the best technical and design approach for your project.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 flex items-center justify-center mx-auto mb-6">
                  <div className="w-7 h-7 rounded-full bg-emerald-400" />
                </div>
                <h4 className="text-lg font-black text-white mb-2">
                  Custom Strategy
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A tailored technical and UI strategy focused on performance,
                  scalability, and user experience.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="relative z-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/15 flex items-center justify-center mx-auto mb-6">
                  <div className="w-7 h-7 rounded-full bg-purple-400" />
                </div>
                <h4 className="text-lg font-black text-white mb-2">
                  Next Steps
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Clear roadmap, timeline, and deliverables to move from idea to
                  execution smoothly.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
