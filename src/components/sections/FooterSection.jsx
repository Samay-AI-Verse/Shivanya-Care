/**
 * FooterSection — Final page (Page 7)
 * Matches the CropTab/Farm Minerals reference:
 *  • Cream background
 *  • Column nav grid (left) + contact (right)
 *  • Large SVG logo centered at bottom
 *  • Copyright + LinkedIn bottom bar
 */
import FooterHoverGrid from "../effects/FooterHoverGrid";

const NAV_COLS = [
    {
        heading: "Features",
        links: ["WhatsApp Orders", "Telegram Orders", "SMS Ordering", "Voice AI", "Rx Verification"],
    },
    {
        heading: "Platform",
        links: ["Pharmacist Dashboard", "Delivery Module", "Analytics", "Inventory"],
    },
    {
        heading: "Company",
        links: ["About Us", "Contact"],
    },
];

/* Inline SVG logo — the flower mark from App1.jsx */
const LogoMark = ({ size = 160 }) => (
    <svg viewBox="0 0 100 100" width={size} height={size} fill="#2d3d1a" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 10 C60 30 60 55 50 75 C40 55 40 30 50 10 Z" />
        <path d="M55 72 C75 55 90 40 85 25 C70 20 55 45 55 72 Z" />
        <path d="M45 72 C25 55 10 40 15 25 C30 20 45 45 45 72 Z" />
        <path d="M58 75 C85 75 95 85 85 95 L58 95 Z" />
        <path d="M42 75 C15 75 5 85 15 95 L42 95 Z" />
        <rect x="15" y="85" width="70" height="10" rx="2" />
    </svg>
);

const TEXT = {
    fontFamily: "'Outfit', sans-serif",
    color: "#2d3d1a",
};

export default function FooterSection() {
    return (
        <section id="footer-section" style={{
            background: "#ede9df",
            position: "relative",
            overflow: "hidden",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }}>

            <FooterHoverGrid />

            {/* ── Top bar: thin line ── */}
            <div style={{ borderTop: "1px solid rgba(45,61,26,0.15)" }} />

            {/* ── Nav + Contact grid ── */}
            <div style={{ padding: "64px 6vw 48px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1.2fr", gap: "40px", borderBottom: "1px solid rgba(45,61,26,0.12)" }}>

                {/* Nav columns */}
                {NAV_COLS.map(col => (
                    <div key={col.heading} className="footer-anim" style={{ position: "relative", zIndex: 10 }}>
                        <p style={{ ...TEXT, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", margin: "0 0 18px", opacity: 0.5 }}>{col.heading}</p>
                        {col.links.map(link => (
                            <a key={link} href="#" style={{
                                ...TEXT, display: "block", fontSize: "0.85rem", fontWeight: 500,
                                textDecoration: "none", marginBottom: "10px", opacity: 0.75,
                                transition: "opacity 0.2s",
                            }}
                                onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                onMouseLeave={e => e.currentTarget.style.opacity = 0.75}
                            >{link}</a>
                        ))}
                    </div>
                ))}

                {/* Right: Contact */}
                <div className="footer-anim" style={{ textAlign: "right", position: "relative", zIndex: 10 }}>
                    <p style={{ ...TEXT, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.5, margin: "0 0 12px", lineHeight: 1.6 }}>
                        IF YOU HAVE ANY QUESTIONS<br />FEEL FREE TO CONTACT US:
                    </p>
                    <a href="mailto:hello@shivanyarxai.com" style={{
                        ...TEXT, fontSize: "clamp(0.9rem, 1.8vw, 1.4rem)", fontWeight: 700, textDecoration: "none",
                        display: "block", marginBottom: "28px", transition: "opacity 0.2s",
                    }}
                        onMouseEnter={e => e.currentTarget.style.opacity = 0.65}
                        onMouseLeave={e => e.currentTarget.style.opacity = 1}
                    >
                        HELLO@SHIVANYARXAI.COM
                    </a>

                    <a href="#" style={{ ...TEXT, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", opacity: 0.55, transition: "opacity 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.opacity = 1}
                        onMouseLeave={e => e.currentTarget.style.opacity = 0.55}
                    >
                        LINKEDIN
                    </a>
                </div>
            </div>

            {/* ── Logo center ── */}
            <div className="footer-anim" style={{ display: "flex", justifyContent: "center", padding: "56px 0 48px", position: "relative", zIndex: 10, pointerEvents: "none" }}>
                <LogoMark size={140} />
            </div>

            {/* ── Bottom bar ── */}
            <div style={{ borderTop: "1px solid rgba(45,61,26,0.12)", padding: "20px 6vw", display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 10 }}>
                <p style={{ ...TEXT, fontSize: "0.65rem", opacity: 0.45, margin: 0 }}>© 2025 Shivanya RxAI Inc.</p>
                <p style={{ ...TEXT, fontSize: "0.65rem", opacity: 0.45, margin: 0 }}>TERMS OF USE</p>
            </div>
        </section>
    );
}
