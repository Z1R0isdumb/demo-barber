import { useEffect } from "react";
import { Scissors, Star, ArrowRight } from "lucide-react";
import { BarberSilhouette } from "../components/BarberSilhouette";
import { DemoOverlay } from "../components/DemoOverlay";
import { useI18n } from "../lib/i18n";

const barbers = [
  { name: "Bruno Renan", rating: "5.0", reviews: 217, serviceKey: "svc.haircut.name" },
];

export default function BarbersPage() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = "Our Barbers — Master Barber USA";
  }, []);
  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t("barbers.eyebrow")}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t("barbers.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t("barbers.desc")}</p>
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
                    {t("barbers.role")}
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
                  <span>{barber.reviews} {t("barbers.reviews")}</span>
                </div>
                <div className="mt-6 border-t border-border/50 pt-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {t("barbers.featured")}
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold text-foreground">
                    {t(barber.serviceKey)}
                  </p>
                </div>
                <a
                  href="https://booksy.com/en-us/459969_master-barber-usa_barber-shop_134763_orlando?do=invite&_branch_match_id=1602360762170489818&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVN4r08AzxqAp0NEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAW23SuzwAAAA%3D" target="_blank" rel="noopener noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {t("barbers.bookWith")} {barber.name.split(" ")[0]}
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
