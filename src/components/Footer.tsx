import { Link } from "@tanstack/react-router";
import { Scissors, MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Scissors className="h-5 w-5 text-primary" />
              <span className="font-heading text-base font-bold tracking-tight">
                GOLD <span className="text-primary">&amp;</span> BLADE
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Where craft meets style. Premium grooming for the modern gentleman since 2012.
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>42 Bond Street, Mayfair<br />London W1S 1DE</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>+44 20 7946 0958</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Hours
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Mon–Fri: 9:00 AM – 8:00 PM</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Saturday: 9:00 AM – 6:00 PM</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Sunday: 10:00 AM – 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Gold &amp; Blade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
