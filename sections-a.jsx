// Hero, Numbers, What I Bring, Impact, Projects, Recommendations, Contact, Footer

const { useState, useEffect, useRef } = React;

// =========================================================
// NAV
// =========================================================
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = [
  ["about", "About me"],
  ["approach", "How I create impact"],
  ["work", "Projects"],
  ["recommendations", "Recommendations"],
  ["contact", "Contact"]];

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
      borderBottom: scrolled ? "1px solid #e5e5e5" : "1px solid transparent",
      backdropFilter: scrolled ? "saturate(140%) blur(8px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(140%) blur(8px)" : "none",
      transition: "background 200ms linear, border-color 200ms linear"
    }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "18px 40px", maxWidth: 1320, margin: "0 auto"
      }}>
        <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: "pointer" }}>
          <Wordmark size={17} />
        </a>
        <nav className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {items.map(([id, label]) =>
          <a key={id} onClick={() => go(id)} style={{
            cursor: "pointer", fontSize: 14, color: "#404040",
            fontWeight: 500, letterSpacing: "-0.005em"
          }}>{label}</a>
          )}
        </nav>
        <button className="nav-mobile-btn" onClick={() => setOpen(!open)} style={{
          display: "none", background: "transparent", border: "1px solid #e5e5e5",
          borderRadius: 9999, padding: 10, cursor: "pointer", color: "var(--gold)"
        }}><Icon name={open ? "close" : "menu"} size={18} color="var(--gold)" /></button>
      </div>
      {open &&
      <div className="nav-mobile-panel" style={{
        background: "#fff", borderBottom: "1px solid #e5e5e5", padding: "12px 40px 24px"
      }}>
          {items.map(([id, label]) =>
        <a key={id} onClick={() => go(id)} style={{
          display: "block", padding: "12px 0", fontSize: 18, color: "#000", cursor: "pointer",
          borderBottom: "1px solid #f0f0f0"
        }}>{label}</a>
        )}
        </div>
      }
    </header>);

};

// =========================================================
// HERO — kinetic type-in, big editorial left-aligned
// =========================================================
const Hero = ({ tweaks }) => {
  const headline = "I turn opportunities into revenue growth.";
  const [shown, setShown] = useState(0);
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(i);
      if (i >= headline.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, []);
  const visible = headline.slice(0, shown);
  return (
    <section id="top" style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      justifyContent: "center", padding: "140px 40px 88px",
      maxWidth: 1320, margin: "0 auto", position: "relative"
    }}>
      <Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 36 }}>
          <img src="assets/sora-portrait.jpg" alt="Sora Alahmadi" style={{
            width: 64, height: 64, borderRadius: 9999, objectFit: "cover",
            objectPosition: "50% 22%", border: "1px solid #e5e5e5"
          }} />
          <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, color: "#000", letterSpacing: "-0.01em" }}>
            Sora Alahmadi<span style={{ color: "#b8860b" }}>.</span>
          </span>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: "var(--font-mono)", fontSize: 12, color: "#737373",
            flexWrap: "wrap", alignSelf: "flex-start"
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 7, height: 7, borderRadius: 9999, background: "#b8860b", animation: "pulse 2s infinite" }} />
              Business Development Lead
            </span>
            <span style={{ color: "#d4d4d4" }}>·</span>
            <span>PMI-PBA Certified</span>
            <span style={{ color: "#d4d4d4" }}>·</span>
            <span>Jeddah, Saudi Arabia</span>
          </div>
        </div>
      </Reveal>

      <h1 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(38px, 5.6vw, 76px)",
        lineHeight: 1.04, fontWeight: 500,
        letterSpacing: "-0.025em",
        margin: 0, color: "#000",
        maxWidth: 1000,
        textWrap: "balance"
      }}>
        {visible}
        <span style={{
          display: "inline-block", width: "0.5ch", marginLeft: 2,
          background: "#b8860b", height: "0.85em", verticalAlign: "-0.1em",
          opacity: shown < headline.length ? 1 : 0,
          animation: "blink 1s steps(2) infinite"
        }} />
      </h1>

      <Reveal delay={400}>
        <p style={{
          fontSize: "clamp(14px, 1.05vw, 15.5px)", lineHeight: 1.75, fontWeight: 400,
          color: "#6b6b6b", marginTop: 34, maxWidth: 500, textWrap: "pretty"
        }}>I'm a Business Development and Product Development professional with over <span style={{ whiteSpace: "nowrap" }}>5 years</span> of experience in market research and analysis, strategic planning, opportunity development, proposal management, partnerships, and client engagement.</p>
      </Reveal>

      <Reveal delay={500}>
        <p style={{
          fontSize: "clamp(14px, 1.05vw, 15.5px)", lineHeight: 1.75, fontWeight: 400,
          color: "#6b6b6b", marginTop: 16, maxWidth: 500, textWrap: "pretty"
        }}>I specialize in identifying growth opportunities, building strategic relationships, and driving initiatives from concept to implementation to achieve business objectives.</p>
      </Reveal>

      <Reveal delay={600}>
        <div style={{ display: "flex", gap: 12, marginTop: 40, flexWrap: "wrap" }}>
          <Btn variant="black" iconLeft="download" href="https://drive.google.com/file/d/1rPAiygbL2St6J0daCiBrWNw06p8fRH-2/view?usp=sharing" target="_blank">
            Download my CV
          </Btn>
          <Btn variant="white" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get In Touch
          </Btn>
        </div>
      </Reveal>

      <Reveal delay={900}>
        <div style={{
          display: "flex", alignItems: "center", gap: 14,
          marginTop: 80, color: "#a3a3a3",
          fontFamily: "var(--font-mono)", fontSize: 12
        }}>
          <span>scroll to explore</span>
        </div>
      </Reveal>
    </section>);

};

// =========================================================
// NUMBERS — animated counters
// =========================================================
const Counter = ({ to, suffix = "", prefix = "", duration = 1400, format = "num" }) => {
  const [ref, seen] = useInView();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!seen || format !== "num") return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(to * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration, format]);
  return (
    <span ref={ref}>
      {format === "num" ? `${prefix}${val}${suffix}` : to}
    </span>);

};

const Numbers = () => {
  const stats = [
  { v: 5, prefix: "+", suffix: "", label: "years in business development", note: "fintech · loyalty · tourism" },
  { v: 10, prefix: "+", suffix: "", label: "high-impact projects shipped", note: "from discovery to launch" },
  { v: "PMI-PBA", label: "certified business analysis", note: "license #3188605", format: "text" },
  { v: 4, prefix: "", suffix: "×", label: "outstanding performance awards", note: "2021 · 2022 · 2023 ·  CEO recognized" }];

  return (
    <section id="numbers" style={{
      padding: "112px 40px", borderTop: "1px solid #e5e5e5",
      borderBottom: "1px solid #e5e5e5", background: "#fafafa"
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#737373", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            ~ /numbers
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.2vw, 44px)",
            fontWeight: 500, letterSpacing: "-0.015em", marginTop: 12,
            maxWidth: 720, lineHeight: 1.1
          }}>
            Five years. A quiet stack of receipts.
          </h2>
        </Reveal>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1,
          marginTop: 64, background: "#e5e5e5", border: "1px solid #e5e5e5",
          borderRadius: 12, overflow: "hidden"
        }} className="num-grid">
          {stats.map((s, i) =>
          <Reveal key={i} delay={i * 80}>
              <div style={{
              background: "#fff", padding: "40px 32px",
              minHeight: 220, display: "flex", flexDirection: "column", justifyContent: "space-between"
            }}>
                <div style={{
                fontFamily: "var(--font-display)",
                fontSize: typeof s.v === "string" && s.v.length > 4 ? 36 : 64,
                fontWeight: 500, lineHeight: 1, letterSpacing: "-0.02em",
                color: "#000"
              }}>
                  <Counter to={s.v} prefix={s.prefix} suffix={s.suffix} format={s.format || "num"} />
                </div>
                <div>
                  <div style={{ fontSize: 14, color: "#262626", fontWeight: 500, marginTop: 24 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: "#a3a3a3", marginTop: 6, fontFamily: "var(--font-mono)" }}>{s.note}</div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};

// =========================================================
// WHAT I BRING + NUMBERS — combined: text left, numbers right
// =========================================================
const WhatIBring = () => {
  const stats = [
  { v: 5, prefix: "+", suffix: "", icon: "briefcase", label: "Years in business development", note: "Research · Strategies · Tenders & RFPs" },
  { v: 10, prefix: "+", suffix: "", icon: "rocket", label: "High-impact projects shipped", note: "from discovery to launch" },
  { v: "PMI-PBA", icon: "certificate", label: "Certified business analysis professional", note: "license #3188605", format: "text" },
  { v: 4, prefix: "", suffix: "×", icon: "trophy", label: "Outstanding Performance Awards", note: "recognized for delivering exceptional results" }];

  return (
    <section id="about" style={{ padding: "120px 40px", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5", background: "#fafafa" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }} className="bring-grid">
        {/* LEFT — text */}
        <div>
          <Reveal delay={100}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 60px)",
              fontWeight: 500, letterSpacing: "-0.02em", marginTop: 0, lineHeight: 1.05,
              maxWidth: 600, textWrap: "balance"
            }}>About me</h2>
          </Reveal>
          <Reveal delay={200}>
            <p style={{ fontSize: 19, lineHeight: 1.6, color: "#000", marginTop: 32, maxWidth: 580, fontWeight: 500, textWrap: "pretty" }}>
              A strategic business development professional dedicated to identifying opportunities,
              building partnerships, and driving revenue growth.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#262626", marginTop: 24, maxWidth: 580 }}>
              Over the past five years, I have built my career across the full business development
              lifecycle — from identifying market opportunities and understanding client needs to
              developing proposals, managing pipelines, negotiating commercial agreements, and
              collaborating with cross-functional teams to deliver business value.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "#262626", marginTop: 20, maxWidth: 580 }}>My background combines strategic thinking, commercial execution, and strong stakeholder management. I enjoy transforming business challenges into growth opportunities, developing tailored solutions, and building long-term partnerships that create measurable results. Through market insight, business analysis, and relationship building, I help organizations unlock new opportunities and achieve revenue growth.





            </p>
          </Reveal>
          <Reveal delay={500}>
            <p dir="rtl" lang="ar" style={{
              fontFamily: "'IBM Plex Sans Arabic', var(--font-body)",
              fontSize: 18, lineHeight: 1.8, color: "#000", marginTop: 28, maxWidth: 580,
              fontWeight: 500, borderTop: "1px solid #e5e5e5", paddingTop: 24
            }}>
              من جدة، أعمل بشغف على تطوير الأعمال واكتشاف الفرص.
            </p>
          </Reveal>
        </div>

        {/* RIGHT — stat cards 2×2 */}
        <div className="stats-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gridAutoRows: "1fr", gap: 20
        }}>
          {stats.map((s, i) =>
          <Reveal key={i} delay={150 + i * 100}>
              <div className="stat-card" style={{
              background: "#fff", border: "1px solid #ececec", borderRadius: 18,
              padding: "22px 24px 24px", minHeight: 0,
              display: "flex", flexDirection: "column", height: "100%",
              transition: "background 260ms ease, border-color 260ms ease, transform 260ms ease, box-shadow 260ms ease"
            }}>
                <span style={{
                width: 44, height: 44, borderRadius: 9999, background: "#f3f3f1",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
              }}>
                  <Icon name={s.icon} size={20} color="var(--gold)" />
                </span>
                <div style={{
                marginTop: 18, height: 44, display: "flex", alignItems: "flex-end",
                fontFamily: "var(--font-display)",
                fontSize: typeof s.v === "string" && s.v.length > 4 ? 30 : 44,
                fontWeight: 500, lineHeight: 1, letterSpacing: "-0.02em", color: "#0a0a0a"
              }}>
                  <Counter to={s.v} prefix={s.prefix} suffix={s.suffix} format={s.format || "num"} />
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.45, color: "#555", marginTop: 12, maxWidth: 220 }}>{s.label}</div>
                <div style={{ fontSize: 11.5, color: "#a3a3a3", marginTop: 6, fontFamily: "var(--font-mono)" }}>{s.note}</div>
                <div style={{ flex: 1 }} />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};

// =========================================================
// HOW I CREATE IMPACT — 4 cards
// =========================================================
const Impact = () => {
  const cards = [
  {
    n: "01", icon: "compass", title: "Research & Analysis",
    lead: "Identifying market opportunities and shaping business direction.",
    bullets: ["Market research & competitor analysis", "Industry trends & potential clients", "Business cases & financial analysis"]
  },
  {
    n: "02", icon: "target", title: "Strategic Planning & Execution",
    lead: "Turning opportunities into actionable plans and measurable outcomes.",
    bullets: ["Strategic planning & roadmap development", "Cross-functional collaboration & execution", "Initiative tracking & delivery management"]
  },
  {
    n: "03", icon: "clipboard", title: "Tenders & Projects Management",
    lead: "Leading opportunities from RFP to execution.",
    bullets: ["RFP analysis & tender management", "Proposal development (technical & financial)", "End-to-end project ownership"]
  },
  {
    n: "04", icon: "handshake", title: "Partnerships",
    lead: "Building partnerships that create long-term business value.",
    bullets: ["Partner sourcing & evaluation", "Negotiation & deal structuring", "Relationship management & growth"]
  },
  {
    n: "05", icon: "chart", title: "Analytics & Performance",
    lead: "Driving growth through data and insights.",
    bullets: ["KPI tracking & performance analysis", "Revenue & growth reporting", "Data-driven decision making"]
  }];

  return (
    <section id="approach" style={{
      padding: "120px 40px", background: "#fff",
      borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5"
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <div>
            <Reveal delay={100}>
              <h2 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 500, letterSpacing: "-0.02em", marginTop: 12, lineHeight: 1.1
              }}>How I create impact.

              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p style={{ fontSize: 16, color: "#525252", maxWidth: 420, lineHeight: 1.6 }}>Five key areas. I work across them to turn opportunities into scalable business impact.

            </p>
          </Reveal>
        </div>

        <div className="impact-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 12
        }}>
          {cards.map((c, i) =>
          <Reveal key={i} delay={i * 80}>
              <div className="impact-card" style={{
              background: "#fafafa", border: "1px solid #ececec",
              borderRadius: 12, padding: 20, height: "100%",
              display: "flex", flexDirection: "column", gap: 16,
              transition: "background 120ms linear, border-color 120ms linear"
            }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{
                  width: 46, height: 46, borderRadius: 9999,
                  background: "#f3f3f1",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                    <Icon name={c.icon} size={20} color="var(--gold)" />
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#a3a3a3" }}>{c.n}</span>
                </div>
                <div>
                  <h3 className="impact-title" style={{
                  fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 500,
                  letterSpacing: "-0.01em", margin: 0, color: "#000", lineHeight: 1.2,
                  minHeight: 62, display: "flex", alignItems: "flex-start"
                }}>{c.title}</h3>
                  <p className="impact-lead" style={{ fontSize: 12.5, color: "#737373", marginTop: 8, lineHeight: 1.5, minHeight: 72 }}>{c.lead}</p>
                </div>
                <ul style={{
                margin: 0, paddingLeft: 0, listStyle: "none",
                borderTop: "1px solid #f0f0f0", paddingTop: 14,
                display: "flex", flexDirection: "column", gap: 8
              }}>
                  {c.bullets.map((b, j) =>
                <li key={j} style={{ fontSize: 12, color: "#404040", lineHeight: 1.45, display: "flex", gap: 7 }}>
                      <span style={{ color: "#b8860b", fontFamily: "var(--font-mono)" }}>—</span>
                      <span>{/[.!?]$/.test(b) ? b : b + "."}</span>
                    </li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

};

Object.assign(window, { Nav, Hero, Numbers, WhatIBring, Impact });