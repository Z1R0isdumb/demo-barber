import { createFileRoute } from "@tanstack/react-router";
import galleryLounge from "../assets/gallery-lounge.jpg";
import galleryTools from "../assets/gallery-tools.jpg";
import galleryHaircut from "../assets/gallery-haircut-1.jpg";
import heroBarbershop from "../assets/hero-barbershop.jpg";
import serviceHaircut from "../assets/service-haircut.jpg";
import serviceShave from "../assets/service-shave.jpg";
import serviceBeard from "../assets/service-beard.jpg";
import serviceTreatment from "../assets/service-treatment.jpg";

const galleryItems = [
  { src: heroBarbershop, alt: "Barbershop interior", label: "Interior", span: "md:col-span-2 md:row-span-2" },
  { src: galleryHaircut, alt: "Styled haircut result", label: "Styles", span: "" },
  { src: serviceHaircut, alt: "Precision fade haircut", label: "Haircuts", span: "md:col-span-2" },
  { src: galleryLounge, alt: "Waiting lounge", label: "Atmosphere", span: "" },
  { src: serviceShave, alt: "Hot towel shave", label: "Shaves", span: "" },
  { src: galleryTools, alt: "Premium barber tools", label: "Tools", span: "" },
  { src: serviceBeard, alt: "Beard sculpting", label: "Beards", span: "md:col-span-2" },
  { src: serviceTreatment, alt: "Hair treatment", label: "Treatments", span: "" },
];

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Gold & Blade" },
      { name: "description", content: "Browse our gallery of premium haircuts, hot towel shaves, beard sculpting, and the refined atmosphere of Gold & Blade." },
      { property: "og:title", content: "Gallery — Gold & Blade" },
      { property: "og:description", content: "Browse our gallery of premium haircuts, hot towel shaves, beard sculpting, and the refined atmosphere of Gold & Blade." },
    ],
  }),
});

function GalleryPage() {
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Visual Journal
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A glimpse into the world of Gold &amp; Blade — the cuts, the craft,
            and the atmosphere that defines us.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.alt}
              className={`group relative overflow-hidden ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
