import { useEffect } from "react";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { useI18n } from "../lib/i18n";

const hours: [string, string][] = [
  ["day.sunday", "day.closed"],
  ["day.monday", "9:30 AM – 8:00 PM"],
  ["day.tuesday", "9:30 AM – 8:00 PM"],
  ["day.wednesday", "9:30 AM – 8:00 PM"],
  ["day.thursday", "9:30 AM – 8:00 PM"],
  ["day.friday", "9:30 AM – 8:00 PM"],
  ["day.saturday", "9:30 AM – 6:00 PM"],
];

export default function LocationPage() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = "Location & Hours — Master Barber USA";
  }, []);
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
            <h2 className="font-heading text-2xl font-bold text-foreground">Master Barber USA</h2>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">{t("location.address")}</p>
                  <p className="text-sm text-muted-foreground">
                    5536 International Dr<br />Orlando, FL 32819
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
                href="https://www.google.com/maps/dir/?api=1&destination=5536+International+Dr+Orlando+FL+32819"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Navigation className="h-4 w-4" /> {t("home.visit.directions")}
              </a>
              <a
                href="https://booksy.com/en-us/459969_master-barber-usa_barber-shop_134763_orlando?do=invite&_branch_match_id=1602360762170489818&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVN4r08AzxqAp0NEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAW23SuzwAAAA%3D" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/20"
              >
                {t("nav.book")}
              </a>
            </div>

            <div className="mt-10">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                {t("amenities.title")}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["amenities.parking", "amenities.wifi", "amenities.cards"].map((k) => (
                  <li key={k} className="rounded-md border border-border/50 bg-card/30 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {t(k)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-h-[400px] overflow-hidden border border-border/50">
            <iframe
              title="Master Barber USA location map"
              src="https://maps.google.com/maps?q=5536%20International%20Dr%20Orlando%20FL%2032819&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
            href="https://booksy.com/en-us/459969_master-barber-usa_barber-shop_134763_orlando?do=invite&_branch_match_id=1602360762170489818&utm_medium=merchant_customer_invite&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT07J0UvKz88urtRLzs%2FVN4r08AzxqAp0NEiyrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAW23SuzwAAAA%3D" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {t("cta.button")}
          </a>
        </div>
      </section>
    </main>
  );
}