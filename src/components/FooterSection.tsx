import { MapPin, Phone, Mail } from "lucide-react";
import { QamariyaBorder, QamariyaDivider } from "@/components/YemeniMotifs";

const FooterSection = () => {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-display text-2xl tracking-wider gold-gradient-text mb-6">LUMIÈRE</h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light">
              An unforgettable dining experience in the heart of the city, where every detail is crafted with passion.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Hours</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p>Monday – Thursday: 5:30 PM – 10:00 PM</p>
              <p>Friday – Saturday: 5:00 PM – 11:00 PM</p>
              <p>Sunday: 5:00 PM – 9:30 PM</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground font-light">
              <p className="flex items-center gap-3"><MapPin size={14} className="text-primary shrink-0" /> 42 Rue de la Lumière, Paris</p>
              <p className="flex items-center gap-3"><Phone size={14} className="text-primary shrink-0" /> +33 1 42 68 53 00</p>
              <p className="flex items-center gap-3"><Mail size={14} className="text-primary shrink-0" /> hello@lumiere.com</p>
            </div>
          </div>
        </div>

        <QamariyaBorder className="mb-6" />
        <QamariyaDivider className="mb-6" />
        <p className="text-center text-xs text-muted-foreground tracking-[0.2em]">
          © 2026 LUMIÈRE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
