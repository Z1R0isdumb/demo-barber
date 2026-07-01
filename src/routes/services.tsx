import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const services = [
  { name: "Haircut", price: "$35", description: "Professional haircut tailored to your style and face shape. Includes consultation, precise execution, and detailed finishing for a clean, modern look." },
  { name: "Eyebrows", price: "$10", description: "Eyebrow grooming service performed with a straight razor, designed to clean, shape, and define your brows while enhancing your facial features with a natural and well-balanced look." },
  { name: "Beard Trim Premium (Hot Towel)", price: "$25", description: "Our premium hot towel beard service featuring a precise trim and clean shave, enhanced with warm towels for relaxation, skin comfort, and a smooth, refined finish." },
  { name: "Beard Trim Express", price: "$15", description: "Express beard trim service designed for quick maintenance, delivering a clean, defined look with precise shaping and minimal time." },
  { name: "Haircut + Beard Trim Premium (Hot Towel)", price: "$60", description: "Haircut and beard trim combo with hot towel service, delivering a precise, tailored cut and expertly sculpted beard, finished with a relaxing hot towel for a clean, polished look." },
  { name: "Haircut + Beard Trim Express", price: "$50", description: "Haircut and express beard trim combo, delivering a precise, tailored haircut paired with a quick, clean beard shaping for a sharp and well-groomed look in minimal time." },
  { name: "Nose and Ear Waxing", price: "$15", description: "Nose and ear waxing service using premium wax to safely and effectively remove unwanted hair, leaving a clean, smooth, and well-groomed appearance." },
  { name: "Hair Straightening", price: "$65", description: "Professional hair straightening service designed to smooth and align the hair, reducing frizz and enhancing shine for a sleek, polished, and long-lasting finish." },
  { name: "Platinum — Hair Bleaching", price: "From $120", description: "Platinum hair bleaching service designed to lift color safely, creating a bright, even, and striking platinum finish while maintaining hair health and shine." },
  { name: "Lineup (Pézinho)", price: "$15", description: "Achieve a sharp, clean finish with our Men's Lineup service. Our barbers precisely shape your hairline and edges, enhancing your overall look with crisp, defined lines for a polished and well-groomed appearance." },
  { name: "Hair Lights (Luzes)", price: "From $100", description: "Professional cap highlights using bleach to achieve a natural and evenly distributed lightening effect." },
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
            Barbering Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every service at TRINQ is delivered with precision, care, and the attention to
            detail that defines a premium barbering experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col border border-border/50 bg-card/30 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                  {item.name}
                </h3>
                <span className="shrink-0 font-heading text-xl font-bold text-primary">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <a
                href="#book-now"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book Now
                <ArrowRight className="h-4 w-4" />
              </a>
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
