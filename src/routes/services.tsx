import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../lib/i18n";

const services: { id: string; price: string }[] = [
  { id: "haircut", price: "$35" },
  { id: "eyebrows", price: "$10" },
  { id: "beardPremium", price: "$25" },
  { id: "beardExpress", price: "$15" },
  { id: "comboPremium", price: "$60" },
  { id: "comboExpress", price: "$50" },
  { id: "waxing", price: "$15" },
  { id: "straightening", price: "$65" },
  { id: "platinum", price: "From $120" },
  { id: "lineup", price: "$15" },
  { id: "lights", price: "From $100" },
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
  const { t } = useI18n();
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t("services.eyebrow")}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("services.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("services.desc")}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col border border-border/50 bg-card/30 p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">
                  {t(`svc.${item.id}.name`)}
                </h3>
                <span className="shrink-0 font-heading text-xl font-bold text-primary">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(`svc.${item.id}.desc`)}
              </p>
              <a
                href="#book-now"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t("svc.book")}
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
            {t("cta.button")}
          </a>
        </div>
      </section>
    </main>
  );
}
