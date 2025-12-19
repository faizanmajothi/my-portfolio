import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import TiltedCard from "../util/TiltedCard";
import "swiper/css";
import saluhallDesktop from "/src/assets/img/project1main.png";
import saluhallMobile from "/src/assets/img/project1mob.png";
const projects = [
  {
    title: "S@luhall — SaaS Food Hall Platform",
    description:
      "A SaaS-based food hall platform designed to manage vendors, orders, and operations through a fast, scalable, and performance-optimized frontend.",
    points: [
      "Built a scalable frontend architecture for long-term maintainability",
      "Developed dashboards and CRM features for vendors and admins",
      "Optimized performance using lazy loading and efficient state management",
      "Focused on clean UI, accessibility, and smooth user interactions",
    ],
    image: saluhallDesktop,
    desktop: saluhallDesktop,
    tech: ["Web", "Resposive Mobile"],
    link: "#",
    mobile: saluhallMobile,
  },
  {
    title: "Wayfare",
    points: [
      "Implemented pixel-perfect, responsive UI using React and modern CSS",
      "Applied mobile-first design principles for consistent cross-device usability",
      "Enhanced user engagement with subtle animations and interactions",
      "Optimized rendering performance for fast load times",
    ],
    description:
      "A modern web application focused on clean design, responsive layouts, and smooth user experiences across devices.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    desktop: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    tech: ["Web", "Resposive Mobile"],
    link: "#",
    mobile: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
  {
    title: "Vinateria",
    points: [
      "Developed interactive dashboards for managing structured business data",
      "Built reusable UI components to maintain design consistency",
      "Optimized frontend performance for data-heavy views",
    ],

    description:
      "A data-driven SaaS platform featuring admin dashboards and business-focused workflows built for scalability and performance.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    desktop: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tech: ["Web", "Resposive Mobile"],
    link: "#",
    mobile: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  },
];

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section id="projects" className="px-6 md:px-20 py-24 bg-[#020617] relative overflow-hidden">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2
          className={`md:text-4xl text-3xl font-bold mb-5 transform transition-all duration-1000 delay-200`}
        >
          Selected Projects
        </h2>

        <p
          className={`text-lg text-violet-200/90 leading-relaxed max-w-2xl mx-auto transform transition-all duration-1000 delay-400`}
        >
          A showcase of SaaS platforms and web applications built with
          performance, scalability, and clean UI in mind.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={60}
        slidesPerView={1}
        loop
        autoplay={{ delay: 450000, disableOnInteraction: false }}
        pagination={false}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="mx-auto overflow-visible cust-swiper"
      >
        {/* Custom Arrows */}
        <div className="">
          <button
            ref={prevRef}
            className="w-12 h-12 absolute z-10 left-0 md:-left-10 top-2/4 -translate-y-4 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            <IoIosArrowRoundBack className="h-8 w-8" />
          </button>
          <button
            ref={nextRef}
            className="w-12 h-12 absolute z-10 right-0 md:-right-10 top-2/4 -translate-y-4 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
          >
            <IoIosArrowRoundForward className="h-8 w-8" />
          </button>
        </div>
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <div className="md:h-[80vh] relative grid items-center md:grid-cols-2 md:gap-8 gap-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
              {/* Content */}
              <div className="p-8 order-2 md:order-1">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-md text-gray-400 mb-5">
                  {project.description}
                </p>
                <div className="mb-6">
                  <ul className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    {project.points.map((point, i) => (
                      <li
                        key={`point${i}`}
                        className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed group hover:text-white transition"
                      >
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400"
                        />
                        {/* Text */}
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300"
                >
                  View Project →
                </a>
              </div>
              <div className="p-8 order-1 md:order-2">
                <TiltedCard>
                  <div className="relative flex justify-center items-center overflow-hidden rounded-3xl group">
                    {/* Desktop Image Wrapper */}
                    <div className="relative w-full md:h-[420px] h-[250px] overflow-hidden md:rounded-3xl rounded-xl">
                      <img
                        src={project.desktop}
                        alt="Desktop View"
                        className="w-full transition-transform duration-[3000ms] ease-in-out group-hover:-translate-y-[55%]"
                      />
                    </div>

                    {/* Mobile Image */}
                    <div className="absolute -bottom-4 right-10 overflow-hidden w-40 md:w-48 h-[200px]  md:block hidden rounded-2xl shadow-xl p-1 border border-white/10 bg-black z-20">
                      <img
                        src={project.mobile}
                        alt="Mobile View"
                        className="transition-transform duration-[3000ms] object-cover ease-in-out
                      group-hover:-translate-y-[55%]"
                      />
                    </div>
                  </div>
                </TiltedCard>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
