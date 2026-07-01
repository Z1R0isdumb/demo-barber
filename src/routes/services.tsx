import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";

const services = [
  {
    category: "Haircuts",
    items: [
      { name: "Men's Haircut", price: "Starting at —", description: "A tailored cut suited to your style, face shape, and preference." },
      { name: "Skin Fade", price: "Starting at —", description: "Precision fade taken down to the skin for a sharp, modern finish." },
      { name: "Line Up / Shape Up", price: "Starting at —", description: "Crisp edges and clean lines to keep your look sharp between cuts." },
      { name: "Kids Cut", price: "Starting at —", description: "A relaxed, quick, and clean cut for the younger clients." },
    ],
  },
  {
    category: "Beard & Shave",
    items: [
      { name: "Beard Trim", price: "Starting at —", description: "Neat shaping and cleanup to keep your beard looking intentional." },
      { name: "Hot Towel Shave", price: "Starting at —", description: "Straight razor shave with hot towel prep for the smoothest finish." },
    ],
  },
  {
    category: "Signature Combos",
    items: [
      { name: "Haircut & Beard", price: "Starting at —", description: "The full refresh — precision cut paired with detailed beard grooming." },
      { name: "Full Grooming Experience", price: "Starting at —", description: "Haircut, beard, hot towel, and detail work. The complete TRINQ ritual." },
    ],
  },
];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — TRINQ Barbershop" },
      { name: "description", content: "Men's haircuts, skin fades, beard trims, line ups, hot towel shaves, and full grooming at TRINQ Barbershop in Windermere, FL." },
      { property: "og:title", content: "Services — TRINQ Barbershop" },
      { property: "og:description", content: "Men's haircuts, skin fades, beard trims, line ups, hot towel shaves, and full grooming at TRINQ Barbershop in Windermere, FL." },
    ],
  }),
});

function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What We Do
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every service at TRINQ is delivered with precision, care, and the attention to
            detail that defines a premium barbering experience.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((category) => (
            <div key={category.category}>
              <div className="mb-8 flex items-center gap-4">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  {category.category}
                </h2>
                <div className="h-px flex-1 bg-border" />
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex flex-col justify-between border border-border/50 bg-card/30 p-6 transition-colors hover:border-primary/30"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <span className="shrink-0 font-heading text-lg font-bold text-primary">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>By appointment</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="border-t border-border/50 pt-10 text-center">
          <a
            href="#book-now"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
