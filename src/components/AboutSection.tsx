import { motion } from "framer-motion";
import { QamariyaDivider, QamariyaBorder, QamariyaStar } from "@/components/YemeniMotifs";
import heroImg from "@/assets/hero-restaurant.jpg";

const pillars = [
  { title: "Our Heritage",   body: "Rooted in the ancient Kingdom of Saba, our recipes are passed down through generations — unchanged, uncompromised, and full of soul." },
  { title: "Our Craft",      body: "Every dish is built on time-honoured technique: slow-smoked meats, hand-ground spice blends, and doughs kneaded by hand each morning." },
  { title: "Our Hospitality", body: "In Yemen, a guest is a gift. We welcome every table with the warmth and generosity that has defined our culture for thousands of years." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 bg-secondary/20 relative overflow-hidden">
      {/* Background star motifs */}
      <QamariyaStar size={160} className="absolute -top-10 -right-10 opacity-5 hidden lg:block" />
      <QamariyaStar size={120} className="absolute bottom-10 -left-8 opacity-5 hidden lg:block" />

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Who We Are</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider mb-6">About Us</h2>
          <QamariyaDivider />
        </motion.div>

        {/* Two-column layout: image + text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative overflow-hidden aspect-[4/5]">
              <img
                src={heroImg}
                alt="Old City of Sana'a — ancient Yemeni architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Decorative gold border offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="arabic-text text-3xl text-primary/40 mb-4 tracking-widest">مطعم سبأ</p>
            <h3 className="font-display text-3xl sm:text-4xl tracking-wider mb-6 leading-snug">
              A Table Rooted in<br />
              <span className="gold-gradient-text">Ancient Yemen</span>
            </h3>
            <div className="space-y-5 text-muted-foreground font-light leading-relaxed text-sm sm:text-base">
              <p>
                Saba Restaurant was born from a deep love for Yemeni cuisine — one of the Arab world's oldest and most distinctive culinary traditions. Named after the legendary Kingdom of Saba (Sheba), we carry that ancient legacy into every plate we serve.
              </p>
              <p>
                Our kitchen draws on the rich diversity of Yemen's regions: the fragrant rice dishes of Hadramawt, the bold stews of the highlands, the honey-drenched sweets of Sana'a's old city. We cook the way our grandmothers did — with patience, spice, and love.
              </p>
            </div>

            <div className="mt-8">
              <QamariyaBorder />
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { value: "1,000+", label: "Years of heritage" },
                { value: "30+",    label: "Yemeni recipes" },
                { value: "100%",   label: "Authentic spices" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl gold-gradient-text mb-1">{s.value}</p>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-card p-8 hover-glow text-center flex flex-col items-center gap-4"
            >
              <QamariyaDivider className="w-full" />
              <h4 className="font-display text-xl tracking-wider gold-gradient-text">{pillar.title}</h4>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
