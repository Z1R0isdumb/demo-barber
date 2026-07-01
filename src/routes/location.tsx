import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";

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
  ["Sunday", "Closed"],
  ["Monday", "9:30 AM – 8:00 PM"],
  ["Tuesday", "9:30 AM – 8:00 PM"],
  ["Wednesday", "9:30 AM – 8:00 PM"],
  ["Thursday", "9:30 AM – 8:00 PM"],
  ["Friday", "9:30 AM – 8:00 PM"],
  ["Saturday", "9:30 AM – 6:00 PM"],
];

function LocationPage() {
  return (
    <main className="flex-1">
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Find Us
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Location &amp; Hours
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            TRINQ Barbershop is located in Windermere, Florida. Walk in or book ahead.
          </p>
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
                  <p className="text-sm font-medium text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">
                    6536 Old Brick Rd Unit 110, Suite 6<br />Windermere, FL 34786
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="w-full">
                  <p className="text-sm font-medium text-foreground">Business Hours</p>
                  <ul className="mt-2 divide-y divide-border/50 border-y border-border/50">
                    {hours.map(([day, hrs]) => (
                      <li key={day} className="flex items-center justify-between py-2.5 text-sm">
                        <span className="font-medium text-foreground">{day}</span>
                        <span className="text-muted-foreground">{hrs}</span>
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
                <Navigation className="h-4 w-4" /> Get Directions
              </a>
              <a
                href="tel:"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <a
                href="#book-now"
                className="inline-flex items-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary/20"
              >
                Book Now
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
            Ready for your next cut?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Book your appointment today and experience premium barbering in Windermere.
          </p>
          <a
            href="#book-now"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Book Your Appointment
          </a>
        </div>
      </section>
    </main>
  );
}