import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book an Appointment — Gold & Blade" },
      { name: "description", content: "Book your appointment at Gold & Blade. Premium haircuts, hot towel shaves, and beard sculpting in Mayfair, London." },
      { property: "og:title", content: "Book an Appointment — Gold & Blade" },
      { property: "og:description", content: "Book your appointment at Gold & Blade. Premium haircuts, hot towel shaves, and beard sculpting in Mayfair, London." },
    ],
  }),
});

function BookingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex-1">
      {/* Page Header */}
      <section className="border-b border-border/50 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Reserve Your Chair
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Book an Appointment
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Walk-ins are welcome, but appointments guarantee your preferred time and barber.
            Fill out the form below and we will confirm your booking.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="border border-primary/30 bg-primary/10 p-8 text-center">
                <h2 className="font-heading text-2xl font-bold text-foreground">Booking Request Received</h2>
                <p className="mt-3 text-muted-foreground">
                  Thank you for choosing Gold &amp; Blade. We will contact you shortly to confirm your appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                      placeholder="+44 20 7946 0958"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="date" className="mb-2 block text-sm font-medium text-foreground">
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="mb-2 block text-sm font-medium text-foreground">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="classic-cut">Classic Cut</option>
                    <option value="fade-blend">Fade &amp; Blend</option>
                    <option value="buzz-cut">Buzz Cut</option>
                    <option value="long-trim">Long Hair Trim</option>
                    <option value="hot-shave">Hot Towel Shave</option>
                    <option value="beard-trim">Beard Trim</option>
                    <option value="beard-sculpt">Beard Sculpting</option>
                    <option value="mustache">Mustache Trim</option>
                    <option value="wash-style">Hair Wash &amp; Style</option>
                    <option value="scalp">Scalp Treatment</option>
                    <option value="color">Hair Coloring</option>
                    <option value="facial">Facial Treatment</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="barber" className="mb-2 block text-sm font-medium text-foreground">
                    Preferred Barber (optional)
                  </label>
                  <select
                    id="barber"
                    name="barber"
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="">No preference</option>
                    <option value="marcus">Marcus Johnson</option>
                    <option value="david">David Cole</option>
                    <option value="antonio">Antonio Reyes</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="mb-2 block text-sm font-medium text-foreground">
                    Notes (optional)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                    placeholder="Any special requests or details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  Request Appointment
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-2">
            <div className="border border-border/50 bg-card/30 p-8">
              <h2 className="font-heading text-xl font-bold text-foreground">Shop Info</h2>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      42 Bond Street, Mayfair<br />London W1S 1DE
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+44 20 7946 0958</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@goldandblade.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon–Fri: 9:00 AM – 8:00 PM<br />
                      Saturday: 9:00 AM – 6:00 PM<br />
                      Sunday: 10:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
