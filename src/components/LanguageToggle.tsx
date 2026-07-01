import { useI18n, type Lang } from "../lib/i18n";

function UsFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 19 10" className={className} aria-hidden="true">
      <rect width="19" height="10" fill="#b22234" />
      {[1, 3, 5, 7, 9].map((y) => (
        <rect key={y} y={y} width="19" height="1" fill="#fff" />
      ))}
      <rect width="8" height="5" fill="#3c3b6e" />
    </svg>
  );
}

function BrFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} aria-hidden="true">
      <rect width="20" height="14" fill="#009c3b" />
      <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#ffdf00" />
      <circle cx="10" cy="7" r="2.6" fill="#002776" />
    </svg>
  );
}

type Props = { className?: string };

export function LanguageToggle({ className = "" }: Props) {
  const { lang, setLang } = useI18n();
  const btn = (target: Lang, label: string, Flag: typeof UsFlag) => {
    const active = lang === target;
    return (
      <button
        type="button"
        onClick={() => setLang(target)}
        aria-label={label}
        aria-pressed={active}
        className={`inline-flex h-6 w-8 items-center justify-center overflow-hidden rounded-sm border transition-all ${
          active
            ? "border-primary/60 opacity-100 saturate-100"
            : "border-border/50 opacity-50 grayscale hover:opacity-90 hover:grayscale-0"
        }`}
      >
        <Flag className="h-full w-full object-cover" />
      </button>
    );
  };
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      {btn("en", "Switch to English", UsFlag)}
      {btn("pt", "Mudar para Português", BrFlag)}
    </div>
  );
}
