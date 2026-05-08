// Styled text logos — replace each with <Image> when you have the actual logo files.
// ← Update: e.g. <Image src="/logos/ikea.svg" alt="IKEA" width={60} height={32} />

type Props = {
  logoKey: "ikea" | "suitsupply" | "sandvik" | "assa-abloy";
};

export default function CompanyLogo({ logoKey }: Props) {
  if (logoKey === "ikea") {
    return (
      <div className="inline-flex items-center justify-center bg-[#0051BA] px-3 py-1 rounded">
        <span className="text-[#FFCC00] font-extrabold text-base tracking-wider leading-none">
          IKEA
        </span>
      </div>
    );
  }

  if (logoKey === "suitsupply") {
    return (
      <span className="text-[11px] font-bold tracking-[0.2em] text-ink uppercase">
        SUITSUPPLY
      </span>
    );
  }

  if (logoKey === "sandvik") {
    return (
      <span className="text-sm font-bold tracking-widest text-ink uppercase flex items-center gap-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="8" cy="8" r="7" stroke="#1a1a1a" strokeWidth="1.5" />
          <path d="M5 8h6M8 5v6" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        SANDVIK
      </span>
    );
  }

  if (logoKey === "assa-abloy") {
    return (
      <span className="text-[11px] font-bold tracking-[0.15em] text-ink uppercase">
        ASSA ABLOY
      </span>
    );
  }

  return null;
}
