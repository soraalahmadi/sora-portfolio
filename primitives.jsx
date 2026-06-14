// Primitives — Wordmark, Icon, utility hooks
const cls = (...xs) => xs.filter(Boolean).join(" ");

const Wordmark = ({ dark = false, size = 18 }) => (
  <span style={{
    fontFamily: "var(--font-display)",
    fontSize: size, fontWeight: 500,
    color: dark ? "#fff" : "#000",
    letterSpacing: "-0.01em",
    lineHeight: 1,
  }}>
    sora alahmadi<span style={{ color: "#b8860b" }}>.</span>
  </span>
);

// Lucide-style icons, stroke 1.6
const Icon = ({ name, size = 18, color = "currentColor" }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: color, strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "arrow-right": return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "arrow-up-right": return <svg {...props}><path d="M7 17L17 7M8 7h9v9"/></svg>;
    case "arrow-down": return <svg {...props}><path d="M12 5v14M19 12l-7 7-7-7"/></svg>;
    case "menu": return <svg {...props}><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
    case "close": return <svg {...props}><path d="M18 6L6 18M6 6l12 12"/></svg>;
    case "check": return <svg {...props}><path d="M20 6L9 17l-5-5"/></svg>;
    case "mail": return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case "linkedin": return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 10v8M8 7v.01M12 18v-5a3 3 0 0 1 6 0v5"/></svg>;
    case "download": return <svg {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>;
    case "doc": return <svg {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>;
    case "search": return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>;
    case "users": return <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1A4 4 0 0 1 16 11"/></svg>;
    case "target": return <svg {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>;
    case "map": return <svg {...props}><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></svg>;
    case "chart": return <svg {...props}><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-6"/></svg>;
    case "handshake": return <svg {...props}><path d="M11 17l2 2a1 1 0 0 0 1.4 0l3.6-3.6"/><path d="M16 13l3 3"/><path d="M2 13l3-3 4 4 4-4 3 3"/><path d="M22 13l-3-3-4 4"/></svg>;
    case "spark": return <svg {...props}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case "quote": return <svg {...props}><path d="M3 21c3 0 6-2 6-8V5H3v8h3M21 21c-3 0-6-2-6-8V5h6v8h-3"/></svg>;
    case "external": return <svg {...props}><path d="M15 3h6v6M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>;
    case "plus": return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "pin": return <svg {...props}><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case "minus": return <svg {...props}><path d="M5 12h14"/></svg>;
    case "briefcase": return <svg {...props}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg>;
    case "rocket": return <svg {...props}><path d="M12 3c3 1.5 5 4.5 5 8 0 2-.5 3.5-1 4.5H8c-.5-1-1-2.5-1-4.5 0-3.5 2-6.5 5-8z"/><circle cx="12" cy="9" r="1.6"/><path d="M9 16c-1.5.5-3 2-3 5 2 0 3.5-.5 4-1.5M15 16c1.5.5 3 2 3 5-2 0-3.5-.5-4-1.5"/></svg>;
    case "certificate": return <svg {...props}><circle cx="12" cy="9" r="6"/><path d="M9 13.5L8 21l4-2 4 2-1-7.5"/><path d="M12 6v3l2 1"/></svg>;
    case "trophy": return <svg {...props}><path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3M10 14h4M9 21h6M12 14v3"/></svg>;
    case "compass": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg>;
    case "clipboard": return <svg {...props}><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1z"/><path d="M9 11h6M9 15h4"/></svg>;
    default: return null;
  }
};

// useInView — scroll-reveal
const useInView = (opts = {}) => {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.15, ...opts });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return [ref, seen];
};

// Reveal — wraps children in a fade+rise
const Reveal = ({ children, delay = 0, as = "div", style, className }) => {
  const [ref, seen] = useInView();
  const Tag = as;
  return (
    <Tag ref={ref} className={className} style={{
      opacity: seen ? 1 : 0,
      transform: seen ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 700ms cubic-bezier(.2,.6,.2,1) ${delay}ms, transform 700ms cubic-bezier(.2,.6,.2,1) ${delay}ms`,
      ...style,
    }}>{children}</Tag>
  );
};

// Pill button
const Btn = ({ variant = "black", children, onClick, icon, iconLeft, type = "button", style, href, target }) => {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    padding: "12px 22px", borderRadius: 9999, fontFamily: "var(--font-body)",
    fontSize: 15, fontWeight: 500, lineHeight: 1, cursor: "pointer",
    border: "1px solid transparent", textDecoration: "none",
    transition: "background 120ms linear, color 120ms linear, border-color 120ms linear",
  };
  const variants = {
    black: { background: "#000", color: "#fff", borderColor: "#000" },
    gold:  { background: "var(--gold)", color: "#fff", borderColor: "var(--gold)" },
    white: { background: "#fff", color: "#262626", borderColor: "#d4d4d4" },
    gray:  { background: "#e5e5e5", color: "#262626", borderColor: "#e5e5e5" },
    ghost: { background: "transparent", color: "#000", borderColor: "transparent" },
  }[variant];
  const props = { onClick, style: { ...base, ...variants, ...style } };
  const inner = (
    <>
      {iconLeft && <Icon name={iconLeft} size={16} />}
      {children}
      {icon && <Icon name={icon} size={16} />}
    </>
  );
  if (href) return <a href={href} target={target} {...props}>{inner}</a>;
  return <button type={type} {...props}>{inner}</button>;
};

// Tag chip
const Tag = ({ children, mono = false, gold = false, style }) => (
  <span style={{
    display: "inline-flex", alignItems: "center",
    padding: "4px 12px", borderRadius: 9999,
    background: gold ? "#f5e6b8" : "#e5e5e5",
    color: gold ? "#7a5a07" : "#262626",
    fontFamily: mono ? "var(--font-mono)" : "var(--font-body)",
    fontSize: 12, lineHeight: 1.4,
    ...style,
  }}>{children}</span>
);

Object.assign(window, { cls, Wordmark, Icon, useInView, Reveal, Btn, Tag });
