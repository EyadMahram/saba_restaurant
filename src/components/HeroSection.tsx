import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";
import { QamariyaDivider, QamariyaStar } from "@/components/YemeniMotifs";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Elegant fine dining restaurant interior with candlelight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Subtle qamariya stars in corners */}
      <QamariyaStar size={80} className="absolute top-24 left-8 opacity-30 hidden md:block" />
      <QamariyaStar size={60} className="absolute top-32 right-12 opacity-20 hidden md:block" />
      <QamariyaStar size={50} className="absolute bottom-32 left-16 opacity-15 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <QamariyaDivider className="mb-8" />
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl tracking-wider mb-6 gold-gradient-text">
            LUMIÈRE
          </h1>
          <p className="font-body text-lg sm:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-4">
            Fine Dining Experience
          </p>
          <QamariyaDivider className="mt-8 mb-10" />
          <p className="font-body text-base text-muted-foreground max-w-lg mx-auto leading-relaxed font-light">
            Where culinary artistry meets timeless elegance. Each dish is a journey, each moment unforgettable.
          </p>
        </motion.div>

        <motion.a
          href="#menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="inline-flex flex-col items-center mt-16 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          <span className="text-xs tracking-[0.3em] uppercase mb-2">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
