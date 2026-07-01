import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Star, ArrowRight } from "lucide-react";
import { BarberSilhouette } from "../components/BarberSilhouette";
import { DemoOverlay } from "../components/DemoOverlay";

const barbers = [
  {
    name: "Vinicius Fonseca",
    title: "TRINQ Barber",
    rating: "5.0",
    reviews: "4 Reviews",
    featuredService: "Haircut",
    price: "$35",
  },
  {
    name: "Julio Mariano",
    title: "TRINQ Barber",
    rating: "5.0",
    reviews: "2 Reviews",
    featuredService: "Haircut",
    price: "$35",
  },
];

export const Route = createFileRoute("/barbers")({
  component: BarbersPage,
  head: () => ({
    meta: [
      { title: "Our Barbers — TRINQ Barbershop" },
      { name: "description", content: "Meet the TRINQ Barbershop team — barbers and grooming specialists delivering premium cuts in Windermere, FL." },
      { property: "og:title", content: "Our Barbers — TRINQ Barbershop" },
      { property: "og:description", content: "Meet the TRINQ Barbershop team — barbers and grooming specialists delivering premium cuts in Windermere, FL." },
    ],
  }),
});

function BarbersPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The Team
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Barbers
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every barber at TRINQ is a craftsman — dedicated to precision, style, and
            delivering a premium grooming experience.
          </p>
        </div>
      </section>

      {/* Barbers Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className="group border border-border/50 bg-card/30 transition-colors hover:border-primary/30"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <BarberSilhouette className="h-full w-full" />
                <DemoOverlay />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <Scissors className="h-4 w-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {barber.title}
                  </span>
                </div>
                <h2 className="mt-2 font-heading text-2xl font-bold text-foreground">
                  {barber.name}
                </h2>
                <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-semibold text-foreground">{barber.rating}</span>
                  <span>·</span>
                  <span>{barber.reviews}</span>
                </div>
                <div className="mt-6 flex items-end justify-between border-t border-border/50 pt-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      Featured Service
                    </p>
                    <p className="mt-1 font-heading text-lg font-semibold text-foreground">
                      {barber.featuredService}
                    </p>
                  </div>
                  <span className="font-heading text-2xl font-bold text-primary">
                    {barber.price}
                  </span>
                </div>
                <a
                  href="#book-now"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Book with {barber.name.split(" ")[0]}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
