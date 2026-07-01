import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";

const services = [
  {
    category: "Haircuts",
    items: [
      { name: "Classic Cut", price: "$45", duration: "30 min", description: "A timeless, tailored cut suited to your face shape and style." },
      { name: "Fade & Blend", price: "$50", duration: "35 min", description: "Precision fading with seamless blending for a sharp, modern look." },
      { name: "Buzz Cut", price: "$30", duration: "20 min", description: "Clean, uniform length all over — bold and effortless." },
      { name: "Long Hair Trim", price: "$55", duration: "40 min", description: "Shape and maintenance for longer styles without sacrificing length." },
    ],
  },
  {
    category: "Beard & Shave",
    items: [
      { name: "Hot Towel Shave", price: "$45", duration: "30 min", description: "Straight razor shave with hot towel preparation for the smoothest finish." },
      { name: "Beard Trim", price: "$30", duration: "20 min", description: "Neat shaping and cleanup to keep your beard looking intentional." },
      { name: "Beard Sculpting", price: "$40", duration: "25 min", description: "Artistic shaping to define jawlines and create bold silhouettes." },
      { name: "Mustache Trim", price: "$15", duration: "10 min", description: "Detailed grooming for a sharp, distinguished mustache." },
    ],
  },
  {
    category: "Treatments",
    items: [
      { name: "Hair Wash & Style", price: "$35", duration: "25 min", description: "Deep cleanse followed by a professional blow-dry and style." },
      { name: "Scalp Treatment", price: "$50", duration: "30 min", description: "Nourishing treatment to refresh the scalp and promote healthy hair." },
      { name: "Hair Coloring", price: "$75+", duration: "60 min", description: "From subtle grays coverage to bold statement colors." },
      { name: "Facial Treatment", price: "$60", duration: "45 min", description: "Cleansing, exfoliation, and moisturization for refreshed skin." },
    ],
  },
];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services & Pricing — Gold & Blade" },
      { name: "description", content: "Explore our full menu of premium grooming services. Haircuts, hot towel shaves, beard sculpting, and treatments at Gold & Blade." },
      { property: "og:title", content: "Services & Pricing — Gold & Blade" },
      { property: "og:description", content: "Explore our full menu of premium grooming services. Haircuts, hot towel shaves, beard sculpting, and treatments at Gold & Blade." },
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
            Services &amp; Pricing
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every service is delivered with precision, care, and the attention to detail
            that has defined Gold &amp; Blade for over a decade.
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
                      <span>{item.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
