import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, MapPin, Phone, Navigation } from "lucide-react";
import heroImage from "../assets/hero-barbershop.jpg";
import serviceHaircut from "../assets/service-haircut.jpg";
import serviceShave from "../assets/service-shave.jpg";
import serviceBeard from "../assets/service-beard.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "TRINQ Barbershop — Premium Barbering in Windermere, FL" },
      { name: "description", content: "TRINQ Barbershop in Windermere, Florida. Precision cuts, clean fades, beard grooming, and personalized service." },
      { property: "og:title", content: "TRINQ Barbershop — Premium Barbering in Windermere, FL" },
      { property: "og:description", content: "TRINQ Barbershop in Windermere, Florida. Precision cuts, clean fades, beard grooming, and personalized service." },
    ],
  }),
});

function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center">
        <img
          src={heroImage}
          alt="Luxury barbershop interior"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Windermere, Florida
            </p>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-primary">Premium</span> Barbering
              <br />
              in Windermere
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Precision cuts, clean fades, beard grooming, and personalized service designed
              to help you look sharp, feel confident, and stand out.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#book-now"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent"
              >
                View Services
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span><span className="font-semibold text-foreground">5.0</span> · 6 reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured — Asymmetric Editorial */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <img
              src={serviceHaircut}
              alt="Precision haircut"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
          <div className="lg:col-span-5">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About TRINQ
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              More Than a Haircut
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              TRINQ BARBERSHOP, located in Windermere, Florida, delivers a premium grooming
              experience focused on precision, style, and confidence. From modern fades to
              classic cuts and beard grooming, every service is tailored to the client.
              At TRINQ, every detail matters — from the moment you walk in to the final touch.
              This is a clean, sharp, and confident grooming experience.
            </p>
            <div className="mt-6 h-px w-16 bg-primary" />
            <p className="mt-6 text-sm italic text-muted-foreground">
              Precision. Style. Confidence.
              <br />
              <span className="mt-1 block not-italic text-primary">— The TRINQ standard</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview — Magazine Grid */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                What We Offer
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Services
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:inline-flex"
            >
              All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden md:col-span-2 md:row-span-2">
              <img
                src={serviceShave}
                alt="Hot towel shave"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <p className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">
                  Signature
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
                  Full Grooming Experience
                </h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Haircut, beard grooming, and detail work. The complete TRINQ ritual.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <img
                src={serviceHaircut}
                alt="Precision haircut"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">Skin Fade</h3>
                <p className="mt-1 text-sm text-muted-foreground">Sharp &amp; seamless</p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <img
                src={serviceBeard}
                alt="Beard sculpting"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">Beard Trim</h3>
                <p className="mt-1 text-sm text-muted-foreground">Clean &amp; defined</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What Clients Say
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-heading text-2xl font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">· 6 reviews</span>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            "Clean shop, sharp cut, and great attention to detail.",
            "Professional service and a great grooming experience.",
            "Fresh cut, clean fade, and easy booking.",
          ].map((quote, i) => (
            <div key={i} className="border border-border/50 bg-card/30 p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground">&ldquo;{quote}&rdquo;</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Verified Client</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location + Hours */}
      <section id="location" className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Visit Us
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                TRINQ Barbershop
              </h2>
              <p className="mt-4 flex items-start gap-3 text-base text-muted-foreground">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>6536 Old Brick Rd Unit 110, Suite 6<br />Windermere, FL 34786</span>
              </p>
              <div className="mt-8">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  Business Hours
                </h3>
                <ul className="mt-4 divide-y divide-border/50 border-y border-border/50">
                  {[
                    ["Sunday", "Closed"],
                    ["Monday", "9:30 AM – 8:00 PM"],
                    ["Tuesday", "9:30 AM – 8:00 PM"],
                    ["Wednesday", "9:30 AM – 8:00 PM"],
                    ["Thursday", "9:30 AM – 8:00 PM"],
                    ["Friday", "9:30 AM – 8:00 PM"],
                    ["Saturday", "9:30 AM – 6:00 PM"],
                  ].map(([day, hrs]) => (
                    <li key={day} className="flex items-center justify-between py-3 text-sm">
                      <span className="font-medium text-foreground">{day}</span>
                      <span className="text-muted-foreground">{hrs}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=6536+Old+Brick+Rd+Unit+110+Suite+6+Windermere+FL+34786"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
                <a
                  href="tel:"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href="#book-now"
                  className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/20"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="min-h-[400px] overflow-hidden border border-border/50">
              <iframe
                title="TRINQ Barbershop location map"
                src="https://maps.google.com/maps?q=6536%20Old%20Brick%20Rd%20Unit%20110%20Windermere%20FL%2034786&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="h-full min-h-[400px] w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section id="book-now" className="bg-primary/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready for your next cut?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book your appointment today and experience premium barbering in Windermere.
          </p>
          <a
            href="#book-now"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Your Appointment
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
