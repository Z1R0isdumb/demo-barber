import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Scissors } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/barbers", label: "Barbers" },
  { to: "/gallery", label: "Gallery" },
  { to: "/booking", label: "Book" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Scissors className="h-6 w-6 text-primary" />
          <span className="font-heading text-lg font-bold tracking-tight text-foreground">
            GOLD <span className="text-primary">&amp;</span> BLADE
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{ className: "text-primary" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/booking"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 md:inline-flex"
        >
          Book Now
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/50 bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
