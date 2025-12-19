import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import herovideo from "/src/assets/vid/hero-video.mp4";
import heroImage from "/src/assets/img/hero-image.png"; // your image
import ChangingText from "../util/ChangingText";

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section relative min-h-screen overflow-hidden flex md:flex-row flex-col items-center md:justify-start justify-center px-6 md:px-20 md:py-0 py-24"
    >
      {/* BACKGROUND VIDEO (UNCHANGED) */}
      <motion.video
        ref={videoRef}
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-full object-cover scale-110"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={herovideo} type="video/webm" />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* 🔹 CONTENT GRID */}
      <div className="relative z-10 w-full mx-auto ">
        {/* LEFT CONTENT */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ChangingText
            className={"text-md md:text-lg font-bold text-white"}
            words={["Hello", "Halo", "Namaste", "Bonjour", "Hola"]}
          ></ChangingText>
          <h1 className="text-2xl md:text-6xl font-bold leading-tight text-white">
            I'm faizan, Build
            <br />
            <span className="text-primary">high-impact websites</span>
            <br />
            that grow businesses.
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-xl">
            Website specialist with 2+ years of experience delivering fast,
            scalable and conversion-focused web experiences.
          </p>

          <div className="mt-10 flex md:flex-row flex-col md:gap-4 gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-700 gentle-animation cursor-pointer"
            >
              Book Free Call
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById("projects");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" font-semibold border border-white px-6 py-3 rounded-lg text-white hover:bg-primary hover:border-dark gentle-animation cursor-pointer"
            >
              View Work
            </motion.button>
          </div>
        </motion.div>
      </div>
      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="md:flex hidden justify-center"
      >
        <img
          src={heroImage}
          alt="Hero"
          className="w-[100%] md:w-[26vw] z-10 rounded-2xl object-cover md:absolute bottom-0 md:right-20 right-24  "
        />
      </motion.div>
      {/* SCROLL DOWN ARROW */}
      <motion.button
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="md:absolute static md:mt-0  mt-5 bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/80 hover:text-white transition"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>

        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-1">
          <motion.span
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.button>
    </section>
  );
}
