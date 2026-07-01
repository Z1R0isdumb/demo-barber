export function DemoOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
    >
      <span
        className="font-heading text-4xl font-bold uppercase tracking-[0.4em] text-white/25 sm:text-6xl"
        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
      >
        Demo
      </span>
    </div>
  );
}