import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Starters", "Mains", "Desserts", "Drinks"] as const;

type Category = (typeof categories)[number];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

const menuData: Record<Category, MenuItem[]> = {
  Starters: [
    { name: "Seared Foie Gras", description: "Fig compote, brioche crumble, port reduction", price: "34", tag: "Signature" },
    { name: "Tuna Tartare", description: "Avocado, sesame, yuzu vinaigrette, crispy wonton", price: "28" },
    { name: "Burrata", description: "Heirloom tomatoes, basil oil, aged balsamic", price: "24" },
    { name: "French Onion Soup", description: "Gruyère crouton, caramelized onions, thyme", price: "18" },
  ],
  Mains: [
    { name: "Wagyu Beef Tenderloin", description: "Truffle jus, pomme purée, roasted bone marrow", price: "78", tag: "Chef's Choice" },
    { name: "Pan-Seared Dover Sole", description: "Brown butter, capers, lemon, haricots verts", price: "62" },
    { name: "Rack of Lamb", description: "Herb crust, ratatouille, rosemary jus", price: "58" },
    { name: "Wild Mushroom Risotto", description: "Porcini, truffle oil, aged parmesan, microgreens", price: "42" },
  ],
  Desserts: [
    { name: "Chocolate Sphere", description: "Warm ganache, gold leaf, salted caramel center", price: "22", tag: "Showpiece" },
    { name: "Crème Brûlée", description: "Madagascar vanilla, caramelized sugar, fresh berries", price: "18" },
    { name: "Tarte Tatin", description: "Caramelized apple, puff pastry, vanilla ice cream", price: "20" },
    { name: "Cheese Selection", description: "Artisanal cheeses, honeycomb, fig chutney, crackers", price: "26" },
  ],
  Drinks: [
    { name: "Lumière Signature Cocktail", description: "Champagne, elderflower, gold flake, citrus", price: "24", tag: "House Special" },
    { name: "Aged Negroni", description: "Barrel-aged gin, Campari, sweet vermouth", price: "20" },
    { name: "Wine Pairing", description: "Sommelier-selected 4-course pairing", price: "85" },
    { name: "Espresso Martini", description: "Cold brew, vodka, coffee liqueur, vanilla", price: "18" },
  ],
};

const MenuSection = () => {
  const [active, setActive] = useState<Category>("Starters");

  return (
    <section id="menu" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Curated for You</p>
          <h2 className="font-display text-4xl sm:text-5xl tracking-wider mb-6">Our Menu</h2>
          <div className="gold-line mx-auto" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-1 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-6 py-3 text-sm tracking-[0.2em] uppercase font-body transition-colors duration-300 ${
                active === cat ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
              {active === cat && (
                <motion.div
                  layoutId="menu-tab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-0"
          >
            {menuData[active].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group py-8 border-b border-border/50 hover:bg-secondary/30 px-6 -mx-6 transition-colors duration-300 cursor-default"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-xl tracking-wide group-hover:text-primary transition-colors duration-300">
                        {item.name}
                      </h3>
                      {item.tag && (
                        <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-display text-xl text-primary shrink-0">${item.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;
