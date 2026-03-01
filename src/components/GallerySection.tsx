import { motion } from "framer-motion";
import { useState } from "react";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import dish4 from "@/assets/dish-4.jpg";
import dish5 from "@/assets/dish-5.jpg";
import dish6 from "@/assets/dish-6.jpg";

const images = [
  { src: dish1, alt: "Kabsa — fragrant rice with spiced lamb, a classic Arabic centrepiece", caption: "Kabsa" },
  { src: dish2, alt: "Mansaf — slow-cooked lamb in fermented yoghurt sauce on flatbread", caption: "Mansaf" },
  { src: dish3, alt: "Falafel — crispy fried chickpea patties with herbs and sesame tahini", caption: "Falafel" },
  { src: dish4, alt: "Kunafa — crispy shredded pastry soaked in rose-water syrup with sweet cheese", caption: "Kunafa" },
  { src: dish5, alt: "Baklava — layers of flaky pastry, pistachios and honey syrup", caption: "Baklava" },
  { src: dish6, alt: "Shawarma — slow-roasted spiced meat served with garlic sauce and flatbread", caption: "Shawarma" },
];

const GallerySection = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-28 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">A Visual Journey</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider mb-6">The Flavours of Saba</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative aspect-square overflow-hidden group cursor-pointer hover-glow"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-colors duration-500 flex items-end p-6">
                <motion.div
                  initial={false}
                  animate={{ opacity: hoveredIdx === i ? 1 : 0, y: hoveredIdx === i ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-display text-xl tracking-wider">{img.caption}</p>
                  <div className="h-px w-10 bg-primary mt-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
