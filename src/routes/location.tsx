import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { useI18n } from "../lib/i18n";

export const Route = createFileRoute("/location")({
  component: LocationPage,
  head: () => ({
    meta: [
      { title: "Location & Hours — TRINQ Barbershop" },
      { name: "description", content: "Visit TRINQ Barbershop at 6536 Old Brick Rd Unit 110, Suite 6, Windermere, FL 34786. Directions, hours, and booking." },
      { property: "og:title", content: "Location & Hours — TRINQ Barbershop" },
      { property: "og:description", content: "Visit TRINQ Barbershop at 6536 Old Brick Rd Unit 110, Suite 6, Windermere, FL 34786." },
    ],
  }),
});

const hours: [string, string][] = [
  ["day.sunday", "day.closed"],
  ["day.monday", "9:30 AM – 8:00 PM"],
  ["day.tuesday", "9:30 AM – 8:00 PM"],
  ["day.wednesday", "9:30 AM – 8:00 PM"],
  ["day.thursday", "9:30 AM – 8:00 PM"],
  ["day.friday", "9:30 AM – 8:00 PM"],
  ["day.saturday", "9:30 AM – 6:00 PM"],
];

function LocationPage() {
  const { t } = useI18n();
  return (
    <main className="flex-1">
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t("location.eyebrow")}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("location.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("location.desc")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">TRINQ Barbershop</h2>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t("location.address")}</p>
                  <p className="text-sm text-muted-foreground">
                    6536 Old Brick Rd Unit 110, Suite 6<br />Windermere, FL 34786
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="w-full">
                  <p className="text-sm font-medium text-foreground">{t("home.visit.hours")}</p>
                  <ul className="mt-2 divide-y divide-border/50 border-y border-border/50">
                    {hours.map(([dayKey, hrs]) => (
                      <li key={dayKey} className="flex items-center justify-between py-2.5 text-sm">
                        <span className="font-medium text-foreground">{t(dayKey)}</span>
                        <span className="text-muted-foreground">
                          {hrs.startsWith("day.") ? t(hrs) : hrs}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=6536+Old+Brick+Rd+Unit+110+Suite+6+Windermere+FL+34786"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Navigation className="h-4 w-4" /> {t("home.visit.directions")}
              </a>
              <a
                href="tel:"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                <Phone className="h-4 w-4" /> {t("home.visit.call")}
              </a>
              <a
                href="https://www.vagaro.com/trinqbarbershop/book-now" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/20"
              >
                {t("nav.book")}
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
      </section>

      <section id="book-now" className="bg-primary/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("cta.desc")}</p>
          <a
            href="https://www.vagaro.com/trinqbarbershop/book-now" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {t("cta.button")}
          </a>
        </div>
      </section>
    </main>
  );
}