import { createFileRoute } from "@tanstack/react-router";
import { DemoOverlay } from "../components/DemoOverlay";
import galleryLounge from "../assets/gallery-lounge.jpg";
import galleryTools from "../assets/gallery-tools.jpg";
import galleryHaircut from "../assets/gallery-haircut-1.jpg";
import heroBarbershop from "../assets/hero-barbershop.jpg";
import serviceHaircut from "../assets/service-haircut.jpg";
import serviceShave from "../assets/service-shave.jpg";
import serviceBeard from "../assets/service-beard.jpg";
import serviceTreatment from "../assets/service-treatment.jpg";

const galleryItems = [
  { src: heroBarbershop, alt: "Barbershop atmosphere", label: "Atmosphere", span: "md:col-span-2 md:row-span-2" },
  { src: galleryHaircut, alt: "Modern style", label: "Modern Styles", span: "" },
  { src: serviceHaircut, alt: "Skin fade", label: "Fades", span: "md:col-span-2" },
  { src: galleryLounge, alt: "Shop atmosphere", label: "Shop", span: "" },
  { src: serviceShave, alt: "Clean lineup", label: "Lineups", span: "" },
  { src: galleryTools, alt: "Barber tools", label: "Craft", span: "" },
  { src: serviceBeard, alt: "Beard grooming", label: "Beards", span: "md:col-span-2" },
  { src: serviceTreatment, alt: "Classic cut", label: "Classic Cuts", span: "" },
];

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — TRINQ Barbershop" },
      { name: "description", content: "Fades, beard grooming, classic cuts, modern styles, clean lineups, and the atmosphere of TRINQ Barbershop in Windermere, FL." },
      { property: "og:title", content: "Gallery — TRINQ Barbershop" },
      { property: "og:description", content: "Fades, beard grooming, classic cuts, modern styles, clean lineups, and the atmosphere of TRINQ Barbershop in Windermere, FL." },
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
            Fades, beard grooming, classic cuts, modern styles, clean lineups, and the
            atmosphere that defines TRINQ Barbershop.
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
              <DemoOverlay />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 z-20 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
