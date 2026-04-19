type Spec = {
  label: string;
  /** 0–100 — доля заполнения синей полосы */
  fill: number;
};

type Tone = "dark" | "light";

type Props = {
  protection?: Spec;
  weight?: Spec;
  tone: Tone;
};

function clampFill(n: number) {
  return Math.min(100, Math.max(0, n));
}

export function ProductSpecBars({ protection, weight, tone }: Props) {
  if (!protection && !weight) return null;

  const label =
    tone === "dark"
      ? "text-paper/90"
      : "text-ink";
  const track =
    tone === "dark"
      ? "bg-paper/20"
      : "bg-ink/10";

  const Row = ({ spec }: { spec: Spec }) => (
    <div className="min-w-0 flex-1">
      <p
        className={`mb-1.5 font-sans text-[11px] font-semibold leading-tight tracking-[-0.01em] sm:text-xs ${label}`}
      >
        {spec.label}
      </p>
      <div
        className={`h-2 w-full overflow-hidden rounded-full ${track}`}
        role="progressbar"
        aria-valuenow={clampFill(spec.fill)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={spec.label}
      >
        <div
          className="h-full rounded-full bg-dora transition-[width] duration-300 ease-out"
          style={{ width: `${clampFill(spec.fill)}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="mb-3 flex flex-col gap-3 sm:mb-3.5 sm:flex-row sm:gap-4">
      {protection ? <Row spec={protection} /> : null}
      {weight ? <Row spec={weight} /> : null}
    </div>
  );
}
