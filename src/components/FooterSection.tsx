import { MapPin, Phone, Mail } from "lucide-react";
import { QamariyaBorder, QamariyaDivider } from "@/components/YemeniMotifs";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-display text-2xl tracking-wider gold-gradient-text mb-1">SABA</h3>
            <p className="arabic-text text-primary/40 text-sm mb-4 tracking-widest">مطعم سبأ</p>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              An unforgettable journey through Yemen's timeless flavors — where ancient spice routes meet modern craft in every plate.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Hours</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p>Monday: 13:00 – 22:00</p>
              <p>Tuesday: 13:00 – 22:00</p>
              <p>Wednesday: 13:00 – 22:00</p>
              <p>Thursday: 13:00 – 22:00</p>
              <p>Friday: 13:00 – 22:00</p>
              <p>Saturday: 13:00 – 22:00</p>
              <p>Sunday: 13:00 – 22:00</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p className="flex items-center gap-3"><MapPin size={14} className="text-primary shrink-0" /> Westzijde 19, 1506 EA Zaandam</p>
              <p className="flex items-center gap-3"><Phone size={14} className="text-primary shrink-0" /> +31 6 16 42 13 11</p>
              <p className="flex items-center gap-3"><Mail size={14} className="text-primary shrink-0" /> info@sabarestaurant.nl</p>
            </div>
          </div>
        </div>

        <QamariyaBorder className="mb-6" />
        <QamariyaDivider className="mb-6" />
        <p className="text-center text-xs text-muted-foreground tracking-[0.2em]">
          © 2026 SABA RESTAURANT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
