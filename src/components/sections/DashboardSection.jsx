/**
 * DashboardSection — Page 5
 * Pharmacist command dashboard — KPI cards, inventory, analytics.
 */

const KPIS = [
    { icon: "ri-shopping-bag-3-line", label: "Orders Today", value: "284", delta: "+12%", color: "#b7c25e" },
    { icon: "ri-money-rupee-circle-line", label: "Revenue", value: "₹1.2L", delta: "+8%", color: "#7dcf50" },
    { icon: "ri-time-line", label: "Pending", value: "18", delta: "-3", color: "#f4c542" },
    { icon: "ri-medicine-bottle-line", label: "Low Stock", value: "7", delta: "Alert", color: "#ff6b6b" },
];

const CHART_BARS = [40, 65, 50, 80, 72, 90, 84];
const CHART_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ORDERS = [
    { id: "#RX4821", patient: "Ramesh K.", item: "Metformin 500mg", status: "Delivered", statusColor: "#7dcf50" },
    { id: "#RX4820", patient: "Priya M.", item: "Lisinopril 10mg", status: "Out for Delivery", statusColor: "#b7c25e" },
    { id: "#RX4819", patient: "Arun S.", item: "Atorvastatin 20mg", status: "Processing", statusColor: "#f4c542" },
    { id: "#RX4818", patient: "Seema T.", item: "Paracetamol 500mg", status: "Delivered", statusColor: "#7dcf50" },
];

const SIDEBAR_ITEMS = [
    { icon: "ri-dashboard-line", label: "Dashboard", active: true },
    { icon: "ri-file-list-3-line", label: "Orders", active: false },
    { icon: "ri-medicine-bottle-line", label: "Inventory", active: false },
    { icon: "ri-bar-chart-2-line", label: "Analytics", active: false },
    { icon: "ri-team-line", label: "Customers", active: false },
    { icon: "ri-settings-3-line", label: "Settings", active: false },
];

export default function DashboardSection() {
    return (
        <section style={{
            minHeight: "100vh",
            background: "linear-gradient(180deg, #2d3d1a 0%, #1a2a0a 100%)",
            padding: "100px 6vw 80px",
        }}>
            {/* Heading */}
            <p className="dash-anim" style={{ color: "#b7c25e", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", margin: "0 0 14px" }}>
                For Pharmacies &amp; Medical Stores
            </p>
            <h2 className="dash-anim" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 4rem)", color: "#f4ede6", margin: "0 0 16px", lineHeight: 1 }}>
                Your patients order via chat —<br />
                <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "#c8dfa0" }}>you manage it all here.</span>
            </h2>

            {/* Sub-copy */}
            <p className="dash-anim" style={{ color: "#f4ede6", opacity: 0.65, fontSize: "0.95rem", lineHeight: 1.75, fontFamily: "'Outfit', sans-serif", maxWidth: "600px", margin: "0 0 30px" }}>
                Shivanya RxAI is a <strong style={{ color: "#b7c25e", fontWeight: 600 }}>B2B platform built for pharmacies.</strong> Patients
                never see this panel — they simply WhatsApp, call, or text your pharmacy as usual.
                Every incoming order lands here automatically, ready for you to accept, pack, and dispatch.
            </p>

            {/* Order-flow banner */}
            <div className="dash-anim" style={{
                display: "flex", alignItems: "center", gap: "0",
                marginBottom: "32px", background: "rgba(183,194,94,0.06)",
                border: "1px solid rgba(183,194,94,0.18)", borderRadius: "16px",
                overflow: "hidden",
            }}>
                {[
                    { icon: "ri-user-smile-line", label: "Patient", sub: "Messages or calls your pharmacy", color: "#25D366", bg: "rgba(37,211,102,0.10)" },
                    { icon: "ri-robot-2-line", label: "AI Agent", sub: "Understands, verifies & confirms", color: "#b7c25e", bg: "rgba(183,194,94,0.08)" },
                    { icon: "ri-dashboard-line", label: "Your Dashboard", sub: "Order appears — you accept & dispatch", color: "#7dcf50", bg: "rgba(125,207,80,0.10)" },
                ].map((step, i, arr) => (
                    <div key={step.label} style={{ display: "contents" }}>
                        <div style={{ flex: 1, padding: "18px 20px", background: step.bg, display: "flex", alignItems: "center", gap: "14px" }}>
                            <div style={{ width: "40px", height: "40px", borderRadius: "12px", background: `${step.color}18`, border: `1px solid ${step.color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <i className={step.icon} style={{ color: step.color, fontSize: "1.15rem" }} />
                            </div>
                            <div>
                                <div style={{ color: step.color, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>{step.label}</div>
                                <div style={{ color: "#f4ede6", opacity: 0.65, fontSize: "0.75rem", fontFamily: "'Outfit', sans-serif", marginTop: "2px" }}>{step.sub}</div>
                            </div>
                        </div>
                        {i < arr.length - 1 && (
                            <div style={{ padding: "0 4px", color: "rgba(183,194,94,0.4)", fontSize: "1.1rem" }}>›</div>
                        )}
                    </div>
                ))}
            </div>

            {/* Dashboard shell */}
            <div className="dash-anim" style={{
                background: "rgba(15,24,8,0.85)",
                border: "1px solid rgba(183,194,94,0.18)",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
                backdropFilter: "blur(12px)",
                display: "grid",
                gridTemplateColumns: "220px 1fr",
                minHeight: "520px",
            }}>

                {/* ── Sidebar ── */}
                <div style={{ borderRight: "1px solid rgba(183,194,94,0.10)", padding: "24px 0" }}>
                    <div style={{ padding: "0 20px 20px", borderBottom: "1px solid rgba(244,237,230,0.07)", marginBottom: "12px" }}>
                        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "0.85rem", color: "#f4ede6" }}>Shivanya RxAI</div>
                        <div style={{ color: "#b7c25e", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" }}>Pharmacy Portal</div>
                    </div>
                    {SIDEBAR_ITEMS.map(item => (
                        <div key={item.label} style={{
                            display: "flex", alignItems: "center", gap: "12px",
                            padding: "10px 20px", margin: "2px 8px",
                            borderRadius: "10px",
                            background: item.active ? "rgba(183,194,94,0.14)" : "transparent",
                            cursor: "pointer",
                            transition: "background 0.2s",
                        }}>
                            <i className={item.icon} style={{ color: item.active ? "#b7c25e" : "rgba(244,237,230,0.45)", fontSize: "1rem" }} />
                            <span style={{ color: item.active ? "#f4ede6" : "rgba(244,237,230,0.5)", fontSize: "0.8rem", fontWeight: item.active ? 700 : 500, fontFamily: "'Outfit', sans-serif" }}>{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* ── Main area ── */}
                <div style={{ padding: "24px 28px", display: "flex", flexDirection: "column", gap: "22px" }}>

                    {/* Topbar */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div style={{ color: "#f4ede6", fontWeight: 700, fontSize: "1rem", fontFamily: "'Outfit', sans-serif" }}>Good Morning, Dr. Mehta 👋</div>
                            <div style={{ color: "#f4ede6", opacity: 0.45, fontSize: "0.72rem", fontFamily: "'Outfit', sans-serif" }}>Saturday, 21 Feb 2026</div>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <button style={{ background: "rgba(183,194,94,0.12)", border: "1px solid rgba(183,194,94,0.28)", borderRadius: "10px", padding: "7px 14px", color: "#b7c25e", fontSize: "0.72rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", cursor: "pointer", letterSpacing: "0.06em" }}>+ Add Medicine</button>
                            <button style={{ background: "rgba(125,207,80,0.12)", border: "1px solid rgba(125,207,80,0.28)", borderRadius: "10px", padding: "7px 14px", color: "#7dcf50", fontSize: "0.72rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", cursor: "pointer", letterSpacing: "0.06em" }}>View Orders</button>
                        </div>
                    </div>

                    {/* KPI row */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "14px" }}>
                        {KPIS.map(k => (
                            <div key={k.label} style={{ background: "rgba(244,237,230,0.04)", border: "1px solid rgba(244,237,230,0.08)", borderRadius: "14px", padding: "16px 18px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                                    <i className={k.icon} style={{ color: k.color, fontSize: "1.2rem" }} />
                                    <span style={{ background: `${k.color}20`, color: k.color, fontSize: "0.6rem", fontWeight: 700, padding: "2px 7px", borderRadius: "99px", fontFamily: "'Outfit', sans-serif" }}>{k.delta}</span>
                                </div>
                                <div style={{ color: "#f4ede6", fontWeight: 900, fontSize: "1.4rem", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>{k.value}</div>
                                <div style={{ color: "#f4ede6", opacity: 0.45, fontSize: "0.65rem", fontFamily: "'Outfit', sans-serif", marginTop: "4px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{k.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Chart + Orders row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "16px" }}>
                        {/* Bar chart */}
                        <div style={{ background: "rgba(244,237,230,0.04)", border: "1px solid rgba(244,237,230,0.08)", borderRadius: "14px", padding: "18px" }}>
                            <div style={{ color: "#f4ede6", fontWeight: 700, fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif", marginBottom: "16px", opacity: 0.85 }}>Inbound Orders (via AI channels)</div>
                            <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "90px" }}>
                                {CHART_BARS.map((h, i) => (
                                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", height: "100%" }}>
                                        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                                            <div style={{ width: "100%", height: `${h}%`, background: i === 6 ? "#b7c25e" : "rgba(183,194,94,0.4)", borderRadius: "5px 5px 0 0", transition: "height 0.4s" }} />
                                        </div>
                                        <span style={{ color: "#f4ede6", opacity: 0.35, fontSize: "0.55rem", fontFamily: "'Outfit', sans-serif" }}>{CHART_DAYS[i]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Orders table */}
                        <div style={{ background: "rgba(244,237,230,0.04)", border: "1px solid rgba(244,237,230,0.08)", borderRadius: "14px", padding: "18px", overflow: "auto" }}>
                            <div style={{ color: "#f4ede6", fontWeight: 700, fontSize: "0.8rem", fontFamily: "'Outfit', sans-serif", marginBottom: "14px", opacity: 0.85 }}>Orders from WhatsApp / SMS / Call</div>
                            {ORDERS.map(o => (
                                <div key={o.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid rgba(244,237,230,0.05)" }}>
                                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                                        <span style={{ color: "#b7c25e", fontSize: "0.65rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>{o.id}</span>
                                        <div>
                                            <div style={{ color: "#f4ede6", fontSize: "0.72rem", fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>{o.patient}</div>
                                            <div style={{ color: "#f4ede6", opacity: 0.45, fontSize: "0.62rem", fontFamily: "'Outfit', sans-serif" }}>{o.item}</div>
                                        </div>
                                    </div>
                                    <span style={{ background: `${o.statusColor}18`, color: o.statusColor, fontSize: "0.6rem", fontWeight: 700, padding: "3px 9px", borderRadius: "99px", fontFamily: "'Outfit', sans-serif", border: `1px solid ${o.statusColor}30` }}>{o.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
