import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero-barbershop.jpg";
import serviceHaircut from "../assets/service-haircut.jpg";
import serviceShave from "../assets/service-shave.jpg";
import serviceBeard from "../assets/service-beard.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Gold & Blade — Premium Barbershop" },
      { name: "description", content: "Experience the art of grooming at Gold & Blade. Premium haircuts, hot towel shaves, and beard sculpting in an atmosphere of refined masculinity." },
      { property: "og:title", content: "Gold & Blade — Premium Barbershop" },
      { property: "og:description", content: "Experience the art of grooming at Gold & Blade. Premium haircuts, hot towel shaves, and beard sculpting in an atmosphere of refined masculinity." },
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
              Est. 2012 — Mayfair, London
            </p>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Where Craft
              <br />
              Meets <span className="text-primary">Style</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              A sanctuary for the modern gentleman. Precision cuts, timeless shaves,
              and an experience that transcends the ordinary.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent"
              >
                View Services
              </Link>
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
              Our Philosophy
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Art of the Cut
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every visit to Gold &amp; Blade is more than a haircut — it is a ritual.
              Our master barbers combine old-world craftsmanship with contemporary style,
              delivering results that speak for themselves. We believe that when you look
              your best, you feel unstoppable.
            </p>
            <div className="mt-6 h-px w-16 bg-primary" />
            <p className="mt-6 text-sm italic text-muted-foreground">
              &ldquo;A man who trims himself to suit everybody will soon whittle himself away.&rdquo;
              <br />
              <span className="mt-1 block not-italic text-primary">— We live by this</span>
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
                  Hot Towel Shave
                </h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  A timeless ritual. Steam, straight razor, and precision for the smoothest finish.
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
                <h3 className="font-heading text-lg font-bold text-foreground">Precision Cut</h3>
                <p className="mt-1 text-sm text-muted-foreground">From $45</p>
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
                <h3 className="font-heading text-lg font-bold text-foreground">Beard Sculpting</h3>
                <p className="mt-1 text-sm text-muted-foreground">From $30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-primary bg-card/40 px-8 py-10 sm:px-12 sm:py-14">
          <blockquote className="font-heading text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            &ldquo;The barbershop is the one place a man can go to be completely himself —
            no masks, no pretense, just the honest pursuit of looking sharp.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <p className="text-sm font-medium text-primary">Gold &amp; Blade Manifesto</p>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-primary/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready for Your Transformation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Walk in as you are. Walk out as the man you want to be.
            Book your appointment today.
          </p>
          <Link
            to="/booking"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Your Appointment
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
