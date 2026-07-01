import { useEffect } from "react";
import { DemoOverlay } from "../components/DemoOverlay";
import { useI18n } from "../lib/i18n";
import galleryLounge from "../assets/gallery-lounge.jpg";
import galleryTools from "../assets/gallery-tools.jpg";
import galleryHaircut from "../assets/gallery-haircut-1.jpg";
import heroBarbershop from "../assets/hero-barbershop.jpg";
import serviceHaircut from "../assets/service-haircut.jpg";
import serviceShave from "../assets/service-shave.jpg";
import serviceBeard from "../assets/service-beard.jpg";
import serviceTreatment from "../assets/service-treatment.jpg";

const galleryItems = [
  { src: heroBarbershop, key: "atmosphere", span: "md:col-span-2 md:row-span-2" },
  { src: galleryHaircut, key: "modern", span: "" },
  { src: serviceHaircut, key: "fades", span: "md:col-span-2" },
  { src: galleryLounge, key: "shop", span: "" },
  { src: serviceShave, key: "lineups", span: "" },
  { src: galleryTools, key: "craft", span: "" },
  { src: serviceBeard, key: "beards", span: "md:col-span-2" },
  { src: serviceTreatment, key: "classic", span: "" },
];

export default function GalleryPage() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = "Gallery — TRINQ Barbershop";
  }, []);
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t("gallery.eyebrow")}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("gallery.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("gallery.desc")}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {galleryItems.map((item) => (
            <div
              key={item.key}
              className={`group relative overflow-hidden ${item.span}`}
            >
              <img
                src={item.src}
                alt={t(`gallery.${item.key}`)}
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <DemoOverlay />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 z-20 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {t(`gallery.${item.key}`)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
