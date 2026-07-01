import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, MapPin, Phone, Navigation } from "lucide-react";
import { DemoOverlay } from "../components/DemoOverlay";
import { useI18n } from "../lib/i18n";
import heroImage from "../assets/hero-barbershop.jpg";
import serviceHaircut from "../assets/service-haircut.jpg";
import serviceShave from "../assets/service-shave.jpg";
import serviceBeard from "../assets/service-beard.jpg";

export default function HomePage() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = "TRINQ Barbershop — Premium Barbering in Windermere, FL";
  }, []);
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center">
        <img
          src={heroImage}
          alt="Luxury barbershop interior"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t("home.eyebrow")}
            </p>
            <h1 className="mt-4 font-heading text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="text-primary">{t("home.title.a")}</span> {t("home.title.b")}
              <br />
              {t("home.title.c")}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              {t("home.hero.desc")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.vagaro.com/trinqbarbershop/book-now" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t("home.cta.book")}
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-accent"
              >
                {t("home.cta.services")}
              </Link>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span><span className="font-semibold text-foreground">5.0</span> · 6 {t("home.reviews")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured — Asymmetric Editorial */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <img
              src={serviceHaircut}
              alt="Precision haircut"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={1024}
              height={768}
            />
            <DemoOverlay />
          </div>
          <div className="lg:col-span-5">
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {t("home.about.eyebrow")}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t("home.about.title")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("home.about.desc")}
            </p>
            <div className="mt-6 h-px w-16 bg-primary" />
            <p className="mt-6 text-sm italic text-muted-foreground">
              {t("home.about.tagline")}
              <br />
              <span className="mt-1 block not-italic text-primary">{t("home.about.standard")}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Preview — Magazine Grid */}
      <section className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {t("home.services.eyebrow")}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("home.services.title")}
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 sm:inline-flex"
            >
              {t("home.services.all")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="group relative overflow-hidden md:col-span-2 md:row-span-2">
              <img
                src={serviceShave}
                alt="Hot towel shave"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <DemoOverlay />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 z-20 p-6 sm:p-8">
                <p className="font-heading text-xs font-semibold uppercase tracking-wider text-primary">
                  {t("home.services.signature")}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">
                  {t("home.services.full.title")}
                </h3>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  {t("home.services.full.desc")}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <img
                src={serviceHaircut}
                alt="Precision haircut"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <DemoOverlay />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 z-20 p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">{t("home.services.fade.title")}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t("home.services.fade.desc")}</p>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <img
                src={serviceBeard}
                alt="Beard sculpting"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1024}
                height={768}
              />
              <DemoOverlay />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 z-20 p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">{t("home.services.beard.title")}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t("home.services.beard.desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {t("home.reviews.eyebrow")}
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-heading text-2xl font-bold text-foreground">5.0</span>
            <span className="text-muted-foreground">· 6 {t("home.reviews")}</span>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {["home.review.1", "home.review.2", "home.review.3"].map((k, i) => (
            <div key={i} className="border border-border/50 bg-card/30 p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed text-foreground">&ldquo;{t(k)}&rdquo;</p>
              <p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{t("home.reviews.verified")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location + Hours */}
      <section id="location" className="border-t border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                {t("home.visit.eyebrow")}
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t("home.visit.title")}
              </h2>
              <p className="mt-4 flex items-start gap-3 text-base text-muted-foreground">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>6536 Old Brick Rd Unit 110, Suite 6<br />Windermere, FL 34786</span>
              </p>
              <div className="mt-8">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  {t("home.visit.hours")}
                </h3>
                <ul className="mt-4 divide-y divide-border/50 border-y border-border/50">
                  {[
                    ["day.sunday", "day.closed"],
                    ["day.monday", "9:30 AM – 8:00 PM"],
                    ["day.tuesday", "9:30 AM – 8:00 PM"],
                    ["day.wednesday", "9:30 AM – 8:00 PM"],
                    ["day.thursday", "9:30 AM – 8:00 PM"],
                    ["day.friday", "9:30 AM – 8:00 PM"],
                    ["day.saturday", "9:30 AM – 6:00 PM"],
                  ].map(([dayKey, hrs]) => (
                    <li key={dayKey} className="flex items-center justify-between py-3 text-sm">
                      <span className="font-medium text-foreground">{t(dayKey)}</span>
                      <span className="text-muted-foreground">{hrs}</span>
                    </li>
                  ))}
                </ul>
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
        </div>
      </section>

      {/* CTA Band */}
      <section id="book-now" className="bg-primary/10">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t("cta.desc")}</p>
          <a
            href="https://www.vagaro.com/trinqbarbershop/book-now" target="_blank" rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("cta.button")}
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </main>
  );
}
