import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Sparkles } from "lucide-react";
import barber1 from "../assets/barber-1.jpg";
import barber2 from "../assets/barber-2.jpg";
import barber3 from "../assets/barber-3.jpg";

const barbers = [
  {
    name: "Marcus Johnson",
    title: "Master Barber",
    image: barber1,
    bio: "With 12 years behind the chair, Marcus has built a reputation for razor-sharp fades and immaculate beard sculpting. His clients trust him implicitly — and they keep coming back.",
    specialties: ["Fades", "Beard Sculpting", "Textured Cuts"],
  },
  {
    name: 'David "Razor" Cole',
    title: "Senior Barber",
    image: barber2,
    bio: "Fifteen years of experience and a nickname earned honestly. David is our straight-razor specialist, delivering the smoothest hot towel shaves this side of the Thames.",
    specialties: ["Hot Towel Shaves", "Classic Cuts", "Gray Blending"],
  },
  {
    name: "Antonio Reyes",
    title: "Stylist",
    image: barber3,
    bio: "Antonio brings a fresh perspective to the shop. With 8 years of experience in modern styling and color work, he is the go-to for men who want to push boundaries.",
    specialties: ["Modern Styles", "Hair Color", "Creative Fades"],
  },
];

export const Route = createFileRoute("/barbers")({
  component: BarbersPage,
  head: () => ({
    meta: [
      { title: "Our Barbers — Gold & Blade" },
      { name: "description", content: "Meet the master barbers behind Gold & Blade. Marcus Johnson, David Cole, and Antonio Reyes — craftsmen dedicated to the art of grooming." },
      { property: "og:title", content: "Our Barbers — Gold & Blade" },
      { property: "og:description", content: "Meet the master barbers behind Gold & Blade. Marcus Johnson, David Cole, and Antonio Reyes — craftsmen dedicated to the art of grooming." },
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
            Every barber at Gold &amp; Blade is a craftsman. Years of experience,
            an eye for detail, and a passion for the trade.
          </p>
        </div>
      </section>

      {/* Barbers Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {barbers.map((barber) => (
            <div
              key={barber.name}
              className="group border border-border/50 bg-card/30 transition-colors hover:border-primary/30"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={barber.image}
                  alt={barber.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
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
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {barber.bio}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {barber.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      <Sparkles className="h-3 w-3" />
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
