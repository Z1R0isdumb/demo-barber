type Props = { className?: string };

export function BarberSilhouette({ className }: Props) {
  return (
    <div
      className={
        "relative flex items-center justify-center bg-gradient-to-b from-card via-background to-card " +
        (className ?? "")
      }
    >
      <svg
        viewBox="0 0 200 250"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
        className="h-2/3 w-auto text-primary/40"
        fill="currentColor"
      >
        {/* Head */}
        <circle cx="100" cy="80" r="42" />
        {/* Shoulders / bust */}
        <path d="M30 250 C 30 175, 60 140, 100 140 C 140 140, 170 175, 170 250 Z" />
        {/* Scissors accent */}
        <g
          transform="translate(100 200) rotate(-25)"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-primary/70"
        >
          <circle cx="-16" cy="0" r="6" />
          <circle cx="16" cy="0" r="6" />
          <line x1="-10" y1="-3" x2="30" y2="-25" />
          <line x1="10" y1="-3" x2="-30" y2="-25" />
        </g>
      </svg>
    </div>
  );
}