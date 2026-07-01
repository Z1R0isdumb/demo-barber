import { Link } from "@tanstack/react-router";
import { Scissors, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <Scissors className="h-5 w-5 text-primary" />
              <span className="font-heading text-base font-bold tracking-tight">
                TRIN<span className="text-primary">Q</span> BARBERSHOP
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium barbering in Windermere, Florida.
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
              Visit
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>6536 Old Brick Rd Unit 110, Suite 6<br />Windermere, FL 34786</span>
              </li>
            </ul>
            <h3 className="mt-6 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
              <li><Link to="/barbers" className="text-muted-foreground hover:text-primary">Barbers</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary">Gallery</Link></li>
              <li><Link to="/location" className="text-muted-foreground hover:text-primary">Location</Link></li>
              <li><a href="#book-now" className="text-primary hover:text-primary/80">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><Clock className="h-4 w-4 shrink-0 text-primary" /><span>Sunday: Closed</span></li>
              <li className="flex items-center gap-3"><Clock className="h-4 w-4 shrink-0 text-primary" /><span>Mon – Fri: 9:30 AM – 8:00 PM</span></li>
              <li className="flex items-center gap-3"><Clock className="h-4 w-4 shrink-0 text-primary" /><span>Saturday: 9:30 AM – 6:00 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TRINQ Barbershop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
