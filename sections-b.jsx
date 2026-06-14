// Projects (sticky-scroll), Recommendations, Contact, Footer
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;

// =========================================================
// PROJECTS — sticky list left, scrolling details right
// =========================================================
const PROJECTS = [
{
  id: "resal-pay",
  code: "01",
  name: "Resal Pay",
  tag: "fintech · loyalty",
  headline: "Turning loyalty points into a real payment method.",
  overview: "Identified an opportunity, built a product, and enabled a new revenue stream within the ecosystem.",
  problem: "Loyalty points were limited to gift card redemption — low engagement, high volume of unused balances.",
  opportunity: "Enable users to spend loyalty points directly at merchants, increasing usage and unlocking new value.",
  solution: "Built Resal Pay from idea to launch — a solution that lets users pay using loyalty points across participating merchants, online or in store.",
  role: [
  "Conducted market research to identify the opportunity to enable loyalty points as a payment method",
  "Developed the business case and defined the commercial model",
  "Led merchant acquisition and partnership development",
  "Drove go-to-market and rollout across participating merchants",
  "Managed stakeholder alignment across internal and external teams",
  "Supported deal structuring and closing with key partners"],

  impact: [
  "Enabled users to pay using loyalty points across participating merchants",
  "Increased usage of loyalty points beyond gift cards",
  "Expanded the merchant network accepting loyalty-based payments"]

},
{
  id: "loyalty-exchange",
  code: "02",
  name: "Loyalty Points Exchange",
  tag: "ecosystem · partnerships",
  headline: "Connecting loyalty programs into one unified network.",
  overview: "Expanded the platform by enabling users to convert their balance into loyalty program points across selected partners.",
  problem: "Users were limited in how they could use their balance — reduced flexibility and overall usage.",
  opportunity: "Convert balances into loyalty points from airlines, banks, and retail programs to increase platform value and usability.",
  solution: "Built a loyalty exchange model integrating multiple partners across categories.",
  role: [
  "Conducted market research to identify the balance-to-loyalty exchange opportunity",
  "Defined the business case and commercial model for conversion",
  "Sourced and engaged partners across airlines, banks, and retail",
  "Led partnership discussions, negotiations, and commercial alignment",
  "Structured exchange models and partnership agreements",
  "Drove onboarding of partners and supported deal closing"],

  impact: [
  "Increased flexibility of how users can use their balance",
  "Improved overall usage of balances by adding more options",
  "Expanded partnerships with airlines, banks, and retail loyalty programs"]

},
{
  id: "travel-marketplace",
  code: "03",
  name: "Travel & Experiences",
  tag: "tourism · marketplace",
  headline: "Expanding rewards into travel, hotels, and experiences.",
  overview: "Introduced new redemption categories to enhance user experience and increase platform usage.",
  problem: "Reward options were limited, reducing engagement and overall utilization.",
  opportunity: "Add high-demand categories like travel and experiences.",
  solution: "Built a travel and experiences offering allowing users to redeem balances for flights, hotels, and activities.",
  role: [
  "Identified the opportunity to expand the platform into travel and experiences",
  "Conducted market research to validate demand and business potential",
  "Engaged and led discussions with Bookme as the main provider",
  "Led commercial discussions and negotiations",
  "Defined the offering and supported its launch within the platform"],

  impact: [
  "Added new ways for users to use balances through travel and experiences",
  "Increased engagement by expanding available options",
  "Introduced partnerships with travel and experience providers"]

},
{
  id: "corporate-loyalty",
  code: "04",
  name: "Corporate Loyalty & Rewards",
  tag: "government · enterprise",
  headline: "Customized loyalty programs for government and enterprise.",
  overview: "Developed customized loyalty and rewards programs for government and enterprise clients.",
  problem: "Organizations lacked flexible and engaging reward systems.",
  opportunity: "Design tailored programs aligned with user needs and business goals.",
  solution: "Delivered end-to-end loyalty platforms and reward solutions.",
  role: [
  "Identified opportunities through tenders and direct engagement",
  "Led RFP and proposal processes",
  "Managed client discussions and negotiations",
  "Supported project closing and delivery coordination"],

  impact: [
  "Delivered multiple loyalty and rewards programs",
  "Improved engagement and usage of reward systems",
  "Strengthened relationships with key clients"]

}];


const ProjectVisual = ({ p }) => {
  // Abstract grayscale visual per project — type-based, no decorative imagery
  const common = {
    width: "100%", minHeight: "100%", display: "flex", flexDirection: "column",
    justifyContent: "space-between", padding: 32, position: "relative"
  };
  if (p.id === "resal-pay") {
    return (
      <div style={{ ...common, padding: 40, justifyContent: "flex-start", gap: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#a3a3a3", letterSpacing: "0.08em", textTransform: "uppercase" }}>resal_pay.flow</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
          ["points balance", "12,400 pts"],
          ["scan at merchant", "—"],
          ["payment confirmed", "✓"]].
          map(([l, v], i) =>
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
            padding: "14px 18px", background: "#fff", border: "1px solid #e5e5e5", borderRadius: 9999,
            fontFamily: "var(--font-mono)", fontSize: 13
          }}>
              <span style={{ color: "#525252", whiteSpace: "nowrap" }}>{l}</span>
              <span style={{ color: "#000", whiteSpace: "nowrap" }}>{v}</span>
            </div>
          )}
        </div>
        <div style={{ marginTop: -6, fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.05, color: "#000" }}>
          pts → <span style={{ color: "#b8860b" }}>SAR</span>
        </div>
      </div>);

  }
  if (p.id === "loyalty-exchange") {
    const chip = {
      fontFamily: "var(--font-mono)", fontSize: 12, color: "#525252",
      padding: "7px 0", background: "#faf6ec", border: "1px solid #ece0c6", borderRadius: 9999,
      textAlign: "center", flex: 1
    };
    return (
      <div style={{ ...common, justifyContent: "space-between", gap: 26 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#a3a3a3", letterSpacing: "0.08em", textTransform: "uppercase" }}>exchange.network</div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", gap: 10, width: "100%" }}>
            {["airlines", "banks", "retail"].map((n) => <span key={n} style={chip}>{n}</span>)}
          </div>
          <div style={{
            width: 96, height: 96, borderRadius: 9999,
            border: "1px solid #000", display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-display)", fontSize: 15, color: "#000", background: "#fff"
          }}>balance</div>
          <div style={{ display: "flex", gap: 10, width: "100%" }}>
            {["hotels", "telco", "fuel"].map((n) => <span key={n} style={chip}>{n}</span>)}
          </div>
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.15, color: "#000" }}>
          one balance, many programs.
        </div>
      </div>);

  }
  if (p.id === "travel-marketplace") {
    const tile = (l, v, span) =>
    <div key={l} style={{ gridColumn: span ? "1 / -1" : "auto", padding: 16, background: "#fff", border: "1px solid #e5e5e5", borderRadius: 12 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.05em" }}>{l}</div>
        <div style={{ fontSize: 15, color: "#000", marginTop: 8 }}>{v}</div>
      </div>;
    return (
      <div style={{ ...common, justifyContent: "space-between", gap: 26 }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#a3a3a3", letterSpacing: "0.08em", textTransform: "uppercase" }}>travel, hotels &amp; experiences</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {tile("flights", "JED → ROM")}
          {tile("hotels", "from 2,000 SAR")}
          {tile("activities", "AlUla", true)}
        </div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.15, color: "#000" }}>
          redeem → <span style={{ color: "#b8860b" }}>experiences</span>
        </div>
      </div>);

  }
  // corporate
  return (
    <div style={{ ...common, padding: 26, justifyContent: "flex-start", gap: 12 }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#a3a3a3", letterSpacing: "0.08em", textTransform: "uppercase" }}>rfp.lifecycle</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-mono)", fontSize: 13 }}>
        {[
        ["[01]", "tender identified", "✓"],
        ["[02]", "rfp analyzed", "✓"],
        ["[03]", "proposal submitted", "✓"],
        ["[04]", "negotiation", "✓"],
        ["[05]", "delivery", "LIVE"]].
        map(([n, l, s], i) =>
        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, padding: "8px 16px", background: "#fff", border: "1px solid #e5e5e5", borderRadius: 9999 }}>
            <span style={{ display: "flex", gap: 10 }}><span style={{ color: "#a3a3a3" }}>{n}</span><span style={{ color: "#262626" }}>{l}</span></span>
            <span style={{ color: s === "LIVE" ? "#b8860b" : "#737373", whiteSpace: "nowrap" }}>{s}</span>
          </div>
        )}
      </div>
      <div style={{ marginTop: "auto", fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.05, color: "#000" }}>
        end-to-end ownership.
      </div>
    </div>);

};

// ---- Project card (grid item) ----
const ProjectCard = ({ p, i, onOpen }) => {
  const [hover, setHover] = useStateB(false);
  const cats = p.tag.split("·").map((s) => s.trim());
  const dark = hover;
  return (
    <Reveal delay={(i % 2) * 90 + Math.floor(i / 2) * 60}>
      <button
        onClick={() => onOpen(p)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        aria-label={"Open " + p.name + " case study"}
        style={{
          appearance: "none", textAlign: "left", width: "100%", cursor: "pointer",
          background: dark ? "#f3f2ef" : "#fff",
          border: "1px solid " + (dark ? "#e4e2db" : "#ececec"),
          borderRadius: 22, padding: "24px 30px 24px",
          minHeight: 220, display: "flex", flexDirection: "column",
          transform: dark ? "translateY(-4px)" : "translateY(0)",
          boxShadow: dark ? "0 20px 44px -24px rgba(0,0,0,0.25)" : "0 0 0 rgba(0,0,0,0)",
          transition: "background 320ms cubic-bezier(.2,.6,.2,1), border-color 320ms cubic-bezier(.2,.6,.2,1), transform 320ms cubic-bezier(.2,.6,.2,1), box-shadow 320ms cubic-bezier(.2,.6,.2,1)"
        }}>
        <span style={{
          display: "block", height: 2, width: 40,
          background: "var(--gold)",
          transition: "width 320ms cubic-bezier(.2,.6,.2,1)",
          width: dark ? 64 : 40
        }} />
        <h3 style={{
          fontFamily: "var(--font-display)", fontSize: 25, fontWeight: 500,
          letterSpacing: "-0.018em", lineHeight: 1.15, margin: "14px 0 0",
          color: "#0a0a0a", transition: "color 320ms linear"
        }}>{p.name}</h3>
        <p style={{
          fontSize: 14.5, lineHeight: 1.6, margin: "12px 0 0", maxWidth: 320,
          color: dark ? "#6b6b6b" : "#888", transition: "color 320ms linear"
        }}>{p.overview}</p>

        <div style={{ flex: 1, minHeight: 18 }} />

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {cats.map((c, k) => {
            const palette = k % 2 === 0
              ? { bg: "#f5e6b8", bd: "#ecd98f", fg: "#7a5a07" }
              : { bg: "#e5e5e5", bd: "#dcdcdc", fg: "#3a3a3a" };
            return (
            <span key={k} style={{
              fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.03em",
              padding: "5px 11px", borderRadius: 9999, whiteSpace: "nowrap",
              background: palette.bg, border: "1px solid " + palette.bd,
              color: palette.fg, transition: "background 320ms linear, border-color 320ms linear, color 320ms linear"
            }}>{c}</span>);

            })}
          </div>
          <span style={{
            flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
            transform: dark ? "translate(4px, -4px)" : "translate(0,0)",
            transition: "transform 320ms cubic-bezier(.2,.6,.2,1)"
          }}>
            <Icon name="arrow-up-right" size={26} color={dark ? "var(--gold)" : "#0a0a0a"} />
          </span>
        </div>
      </button>
    </Reveal>);

};

// ---- Detail page (full-screen overlay) ----
const ProjectDetail = ({ p, show, onClose }) => {
  if (!p) return null;
  const cats = p.tag.split("·").map((s) => s.trim());
  const block = (label, value) =>
  <div key={label} className="detail-row" style={{
    display: "grid", gridTemplateColumns: "160px 1fr", gap: 32,
    padding: "24px 0", borderTop: "1px solid #ececec"
  }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 3 }}>{label}</div>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "#1a1a1a", margin: 0, maxWidth: 560 }}>{value}</p>
    </div>;

  return (
    <div data-screen-label="Project detail" role="dialog" aria-modal="true" style={{
      position: "fixed", inset: 0, zIndex: 300, background: "#fff",
      overflowY: "auto", WebkitOverflowScrolling: "touch",
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 420ms cubic-bezier(.2,.6,.2,1), transform 420ms cubic-bezier(.2,.6,.2,1)",
      pointerEvents: show ? "auto" : "none"
    }}>
      {/* top bar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 3,
        background: "rgba(255,255,255,0.82)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid #f0f0f0"
      }}>
        <div className="detail-topbar" style={{ maxWidth: 960, margin: "0 auto", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={onClose} className="detail-back" style={{
            appearance: "none", border: "1px solid #ececec", background: "#fafafa",
            borderRadius: 9999, padding: "10px 18px 10px 14px", cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap",
            fontFamily: "var(--font-body)", fontSize: 14, color: "#262626",
            transition: "background 150ms linear, border-color 150ms linear"
          }}>
            <Icon name="arrow-right" size={16} color="#262626" />
            <span>Back to projects</span>
          </button>
        </div>
      </div>

      <div className="detail-wrap" style={{ maxWidth: 960, margin: "0 auto", padding: "0 40px 90px" }}>
        {/* hero */}
        <div style={{ paddingTop: 44 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
            {cats.map((c, k) => <Tag key={k} mono gold={k === 0}>{c}</Tag>)}
          </div>
          <h1 className="detail-h1" style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.4vw, 40px)",
            fontWeight: 500, letterSpacing: "-0.022em", lineHeight: 1.1,
            margin: 0, color: "#0a0a0a", textWrap: "balance", maxWidth: 760
          }}>{p.headline}</h1>
        </div>

        {/* visual */}
        <div className="detail-visual" style={{
          height: 360, marginTop: 36, borderRadius: 18, overflow: "hidden",
          border: "1px solid #ececec", background: "#fafafa"
        }}>
          <ProjectVisual p={p} />
        </div>

        {/* body */}
        <div style={{ marginTop: 44 }}>
          {block("Overview", p.overview)}
          {block("Problem", p.problem)}
          {block("Solution", p.solution)}

          {/* role */}
          <div className="detail-row" style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 32, padding: "24px 0", borderTop: "1px solid #ececec" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 3 }}>My role</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 9, maxWidth: 560 }}>
              {p.role.map((r, k) =>
              <li key={k} style={{ fontSize: 14, lineHeight: 1.5, color: "#262626", display: "flex", gap: 10 }}>
                  <span style={{ color: "#b8860b", fontFamily: "var(--font-mono)", flexShrink: 0 }}>—</span>
                  <span>{/[.!?]$/.test(r) ? r : r + "."}</span>
                </li>
              )}
            </ul>
          </div>

          {/* impact */}
          <div className="detail-row" style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 32, padding: "24px 0", borderTop: "1px solid #ececec" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#a3a3a3", textTransform: "uppercase", letterSpacing: "0.06em", paddingTop: 3 }}>Key impact</div>
            <div style={{
              maxWidth: 560, background: "#0a0a0a", borderRadius: 16, padding: "24px 26px",
              display: "flex", flexDirection: "column", gap: 13
            }}>
              {p.impact.map((r, k) =>
              <div key={k} style={{ display: "flex", gap: 11, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 1, flexShrink: 0 }}><Icon name="check" size={15} color="#e0b84a" /></span>
                  <span style={{ fontSize: 14, lineHeight: 1.5, color: "#fff" }}>{/[.!?]$/.test(r) ? r : r + "."}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>);

};

const Projects = () => {
  const [selected, setSelected] = useStateB(null);
  const [show, setShow] = useStateB(false);

  const openDetail = (p) => {
    setSelected(p);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
  };
  const closeDetail = () => {
    setShow(false);
    document.body.style.overflow = "";
    setTimeout(() => setSelected(null), 440);
  };

  useEffectB(() => {
    if (!selected) return;
    const onKey = (e) => { if (e.key === "Escape") closeDetail(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="work" style={{ padding: "120px 0", background: "#fafafa", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 40px 28px" }}>
        <Reveal delay={100}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 60px)",
            fontWeight: 500, letterSpacing: "-0.02em", marginTop: 16, lineHeight: 1.05,
            maxWidth: 1000, textWrap: "balance"
          }}>
            High-impact projects where ideas became products, partnerships, and measurable growth.
          </h2>
        </Reveal>
      </div>

      <div className="projects-grid" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22,
        maxWidth: 980, margin: "0 auto", padding: "0 40px"
      }}>
        {PROJECTS.map((p, i) =>
        <ProjectCard key={p.id} p={p} i={i} onOpen={openDetail} />
        )}
      </div>

      <ProjectDetail p={selected} show={show} onClose={closeDetail} />
    </section>);

};

// =========================================================
// RECOMMENDATIONS
// =========================================================
const RECS = [
{
  quote: "I've had the pleasure of working with Sora in the Business Development team at Resal, and I can confidently say she is a tremendous asset to any team. Sora brings a strong blend of strategic thinking and execution excellence to everything she does. What stands out most is her ownership and desire to build something impactful. She has a proactive mindset which helps in identifying opportunities and driving partnerships forward.",
  name: "Abdullah Kort",
  role: "Senior Manager, Strategic Business Development at Resal",
  note: ""
},
{
  quote: "Sora has a strong ability to understand markets, spot opportunities, and translate research into clear business opportunities. Her work at Resal helped identify new revenue streams and gave the team a stronger foundation for making growth decisions. Her commitment, dedication, and ownership are unmatched. She consistently approaches each challenge with curiosity, structure, and a practical mindset — connecting insights to real business impact and communicating them in a way that helps teams act with confidence.",
  name: "Abdullah Aitah",
  role: "Sr. Ventures Manager, Corporate Venture Studio at Basamh Group",
  note: ""
},
{
  quote: "I had the privilege of working closely with Sora, who reported directly into my team, and I can confidently say she is one of the most naturally talented professionals I've come across in recent years. Sora brings a rare combination of sharp intellect, creativity, and disciplined execution — she doesn't just complete tasks, she elevates them. What truly sets her apart is her ability to think, adapt, and deliver all at once. Give her direction, and she will not only execute — she will enhance, refine, and often outperform expectations. Any organization would be fortunate to have Sora on board. She is not just a strong contributor; she is a future leader in the making. I highly recommend her without hesitation.",
  name: "Mohammed Al Ramami",
  role: "Chief Commercial Officer at Buildmate",
  note: ""
}];


const RecCard = ({ r, i }) => {
  const [expanded, setExpanded] = useStateB(false);
  const [fullH, setFullH] = useStateB(0);
  const textRef = useRefB(null);
  const COLLAPSED = 168; // px ≈ 6.5 lines
  const overflows = fullH > COLLAPSED + 4;

  useEffectB(() => {
    const measure = () => { if (textRef.current) setFullH(textRef.current.scrollHeight); };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <Reveal delay={i * 120}>
      <div className="rec-card" style={{
        border: "1px solid #1f1f1f", borderRadius: 16, padding: 30,
        display: "flex", flexDirection: "column",
        height: expanded ? "auto" : 430,
        background: "#0a0a0a",
        transition: "transform 280ms ease, border-color 280ms ease, box-shadow 280ms ease"
      }}>
        <Icon name="quote" size={22} color="#b8860b" />
        <div style={{ position: "relative", marginTop: 18, flexShrink: 0 }}>
          <div style={{
            height: !overflows ? "auto" : (expanded ? fullH : COLLAPSED),
            overflow: "hidden",
            transition: "height 460ms cubic-bezier(.22,.61,.36,1)"
          }}>
            <p ref={textRef} style={{ fontSize: 15, lineHeight: 1.62, color: "#dcdcdc", margin: 0, textWrap: "pretty" }}>
              {r.quote}
            </p>
          </div>
          {overflows && !expanded &&
          <div style={{
            position: "absolute", left: 0, right: 0, bottom: 0, height: 56,
            background: "linear-gradient(to bottom, rgba(10,10,10,0), #0a0a0a)",
            pointerEvents: "none"
          }} />}
        </div>

        {overflows &&
        <button onClick={() => setExpanded(!expanded)} style={{
          appearance: "none", background: "transparent", border: "none", cursor: "pointer",
          display: "inline-flex", alignItems: "center", gap: 7, padding: 0, marginTop: 16,
          fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.04em",
          color: "#b8860b", alignSelf: "flex-start"
        }}>
          <span>{expanded ? "Show less" : "Read more"}</span>
          <span style={{
            display: "inline-flex", transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 320ms cubic-bezier(.22,.61,.36,1)"
          }}>
            <Icon name="arrow-down" size={14} color="#b8860b" />
          </span>
        </button>}

        <div style={{ flex: 1, minHeight: 16 }} />

        <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 20, marginTop: 8 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 500, color: "#fff" }}>{r.name}</div>
          <div style={{ fontSize: 13, color: "#a3a3a3", marginTop: 4, lineHeight: 1.4 }}>{r.role}</div>
          {r.note && <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#737373", marginTop: 10, letterSpacing: "0.04em" }}>{r.note}</div>}
        </div>
      </div>
    </Reveal>);

};

const Recommendations = () =>
<section id="recommendations" style={{
  padding: "120px 40px", background: "#000", color: "#fff"
}}>
    <div style={{ maxWidth: 1240, margin: "0 auto" }}>
      <Reveal delay={100}>
        <h2 style={{
        fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 56px)",
        fontWeight: 500, letterSpacing: "-0.02em", marginTop: 16, lineHeight: 1.1,
        color: "#fff", maxWidth: 900, textWrap: "balance"
      }}>
          The work, in their words.
        </h2>
      </Reveal>

      <div className="rec-grid" style={{
      display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
      alignItems: "start", marginTop: 64
    }}>        {RECS.map((r, i) =>
        <RecCard key={i} r={r} i={i} />
      )}
      </div>

      <Reveal delay={400}>
        <div style={{ marginTop: 40, fontFamily: "var(--font-mono)", fontSize: 12, color: "#737373" }}>
          leaders who've worked alongside Sora
        </div>
      </Reveal>
    </div>
  </section>;


// =========================================================
// CONTACT
// =========================================================
const Contact = () => {
  return (
    <section id="contact" style={{ padding: "120px 40px", background: "#fff" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }} className="contact-grid">
        <div>
          <Reveal delay={100}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 84px)",
              fontWeight: 500, letterSpacing: "-0.025em", marginTop: 16, lineHeight: 1.0,
              color: "#000", textWrap: "balance"
            }}>
              Let's build something<span style={{ color: "var(--gold)" }}>.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontSize: 18, color: "#525252", lineHeight: 1.55, marginTop: 28, maxWidth: 520 }}>
              Whether it's a role, a collaboration, or a business opportunity — I'm open to
              meaningful conversations.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
              <a href="mailto:Soraaeid@gmail.com" style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                padding: "16px 22px", border: "1px solid #e5e5e5", borderRadius: 9999,
                color: "#000", textDecoration: "none", width: "fit-content",
                transition: "background 120ms linear, border-color 120ms linear"
              }} className="contact-link">
                <Icon name="mail" size={18} color="var(--gold)" />
                <span style={{ fontSize: 15 }}>Soraaeid@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/soraeid-959926157/" target="_blank" rel="noopener" style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                padding: "16px 22px", border: "1px solid #e5e5e5", borderRadius: 9999,
                color: "#000", textDecoration: "none", width: "fit-content",
                transition: "background 120ms linear, border-color 120ms linear"
              }} className="contact-link">
                <Icon name="linkedin" size={18} color="var(--gold)" />
                <span style={{ fontSize: 15 }}>linkedin.com/in/soraeid</span>
                <Icon name="external" size={14} color="#a3a3a3" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

};

const inputStyle = {
  background: "#fff", border: "1px solid #e5e5e5", borderRadius: 9999,
  padding: "14px 20px", fontFamily: "var(--font-body)", fontSize: 15,
  color: "#262626", outline: "none", width: "100%", boxSizing: "border-box"
};

// =========================================================
// FOOTER
// =========================================================
const Footer = () =>
<footer style={{ background: "#000", color: "#fff", padding: "56px 40px 40px" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
      <Wordmark dark size={20} />
      <div style={{ display: "flex", gap: 28, alignItems: "center", flexWrap: "wrap" }}>
        <span style={{ fontSize: 13, color: "#737373" }}>· Jeddah, KSA</span>
        <span style={{ fontSize: 13, color: "#737373", fontFamily: "var(--font-mono)" }}></span>
        <span style={{ fontSize: 13, color: "#737373" }}>© 2026</span>
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <a href="mailto:Soraaeid@gmail.com" style={socialBtn}><Icon name="mail" size={16} /></a>
        <a href="https://www.linkedin.com/in/soraeid-959926157/" target="_blank" rel="noopener" style={socialBtn}><Icon name="linkedin" size={16} /></a>
      </div>
    </div>
  </footer>;


const socialBtn = {
  width: 40, height: 40, borderRadius: 9999, border: "1px solid #1f1f1f",
  display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
  textDecoration: "none"
};

Object.assign(window, { Projects, Recommendations, Contact, Footer });