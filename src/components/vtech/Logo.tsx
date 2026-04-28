type Props = { variant?: "light" | "dark" };

export const Logo = ({ variant = "dark" }: Props) => {
  const text = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white/60" : "text-muted-foreground";
  return (
    <a href="#" className="flex items-center gap-3 group">
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-10 h-10">
          <polygon points="20,3 37,34 3,34" fill="hsl(var(--accent-red))" />
          <polygon points="20,11 31,30 9,30" fill={variant === "light" ? "hsl(var(--navy-deep))" : "white"} />
          <text x="20" y="26" textAnchor="middle" fontFamily="Barlow Condensed" fontWeight="800" fontSize="14" fill="hsl(var(--accent-red))">V</text>
        </svg>
      </div>
      <div className="leading-none">
        <div className={`font-display font-extrabold text-xl tracking-wide ${text}`}>
          V TECH<span className="text-accent-red"> .</span>
        </div>
        <div className={`text-[10px] uppercase tracking-[0.2em] ${sub}`}>Industries</div>
      </div>
    </a>
  );
};
