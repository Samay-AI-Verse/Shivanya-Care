/**
 * DeliverySection — Page 6
 * Delivery app integration and multi-user module.
 */

const ROLES = [
    {
        icon: "ri-store-2-line",
        color: "#b7c25e",
        title: "Pharmacist",
        desc: "Manages inventory, accepts orders, prints labels and assigns riders.",
        tags: ["Order Accept", "Label Print", "Rider Assign"],
    },
    {
        icon: "ri-e-bike-line",
        color: "#7dcf50",
        title: "Delivery Rider",
        desc: "Gets route-optimised delivery list, marks status in real-time, captures proof.",
        tags: ["Live Route", "Status Update", "Photo Proof"],
    },
    {
        icon: "ri-user-heart-line",
        color: "#29B6F6",
        title: "Patient",
        desc: "Tracks delivery on map, receives ETA alerts, confirms receipt digitally.",
        tags: ["Live Tracking", "ETA Alerts", "Digital Receipt"],
    },
];

const INTEGRATIONS = [
    { name: "Dunzo", color: "#f4c542" },
    { name: "Porter", color: "#f4ede6" },
    { name: "Shadowfax", color: "#7dcf50" },
    { name: "Custom Fleet", color: "#b7c25e" },
];

const MODULE_FEATURES = [
    { icon: "ri-route-line", text: "Route-optimised multi-stop delivery" },
    { icon: "ri-team-line", text: "Unlimited rider accounts per pharmacy" },
    { icon: "ri-map-2-line", text: "Live map tracking for patients" },
    { icon: "ri-plug-2-line", text: "Plug-in with Dunzo, Porter, Shadowfax" },
    { icon: "ri-bar-chart-line", text: "Delivery analytics & SLA tracking" },
    { icon: "ri-shield-check-line", text: "Cold chain & temperature logging" },
];

export default function DeliverySection() {
    return (
        <section style={{
            minHeight: "100vh",
            background: "linear-gradient(180deg, #1a2a0a 0%, #2d3d1a 100%)",
            padding: "100px 6vw 80px",
            position: "relative",
        }}>
            {/* Label */}
            <p className="delivery-anim" style={{ color: "#b7c25e", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", margin: "0 0 14px" }}>
                Delivery & Multi-User Module
            </p>

            <h2 className="delivery-anim" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 4rem)", color: "#f4ede6", margin: "0 0 56px", lineHeight: 1 }}>
                From pharmacy to patient —<br />
                <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "#c8dfa0" }}>door to door, in real time.</span>
            </h2>

            {/* Role cards */}
            <div className="delivery-anim" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "56px" }}>
                {ROLES.map(role => (
                    <div key={role.title} style={{
                        background: "rgba(244,237,230,0.05)",
                        border: `1px solid ${role.color}25`,
                        borderRadius: "22px", padding: "32px 26px",
                        transition: "background 0.25s, transform 0.25s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${role.color}0d`; e.currentTarget.style.transform = "translateY(-4px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "rgba(244,237,230,0.05)"; e.currentTarget.style.transform = "translateY(0)"; }}
                    >
                        <div style={{ width: "52px", height: "52px", borderRadius: "16px", background: `${role.color}18`, border: `1px solid ${role.color}35`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "18px" }}>
                            <i className={role.icon} style={{ color: role.color, fontSize: "1.5rem" }} />
                        </div>
                        <h3 style={{ color: "#f4ede6", fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.1rem", margin: "0 0 10px" }}>{role.title}</h3>
                        <p style={{ color: "#f4ede6", opacity: 0.65, fontSize: "0.86rem", lineHeight: 1.65, fontFamily: "'Outfit', sans-serif", margin: "0 0 18px" }}>{role.desc}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                            {role.tags.map(t => (
                                <span key={t} style={{ background: `${role.color}18`, border: `1px solid ${role.color}30`, borderRadius: "99px", padding: "3px 10px", color: role.color, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", fontFamily: "'Outfit', sans-serif" }}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom: module features + integrations */}
            <div className="delivery-anim" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "40px", alignItems: "start" }}>
                {/* Feature grid */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                    {MODULE_FEATURES.map(f => (
                        <div key={f.text} style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "14px 16px", background: "rgba(244,237,230,0.04)", border: "1px solid rgba(244,237,230,0.08)", borderRadius: "14px" }}>
                            <i className={f.icon} style={{ color: "#b7c25e", fontSize: "1.1rem", marginTop: "1px", flexShrink: 0 }} />
                            <span style={{ color: "#f4ede6", opacity: 0.80, fontSize: "0.82rem", lineHeight: 1.55, fontFamily: "'Outfit', sans-serif" }}>{f.text}</span>
                        </div>
                    ))}
                </div>

                {/* Integration logos */}
                <div style={{ background: "rgba(244,237,230,0.04)", border: "1px solid rgba(244,237,230,0.09)", borderRadius: "22px", padding: "30px 26px" }}>
                    <p style={{ color: "#f4ede6", opacity: 0.45, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", margin: "0 0 20px" }}>Delivery Integrations</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        {INTEGRATIONS.map(int => (
                            <div key={int.name} style={{ background: "rgba(244,237,230,0.06)", border: "1px solid rgba(244,237,230,0.10)", borderRadius: "12px", padding: "16px", textAlign: "center" }}>
                                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: `${int.color}18`, margin: "0 auto 8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <i className="ri-truck-line" style={{ color: int.color, fontSize: "1rem" }} />
                                </div>
                                <span style={{ color: "#f4ede6", opacity: 0.75, fontSize: "0.75rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>{int.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
