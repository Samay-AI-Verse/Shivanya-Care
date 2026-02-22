/**
 * Navbar — top bar on the landing hero
 * Props:
 *  onMenuClick — opens the Sidebar
 */
export default function Navbar({ onMenuClick }) {
    return (
        <div
            className="navbar fixed top-0 left-0 w-full py-7 px-10 flex justify-between items-center"
            style={{ zIndex: 100, mixBlendMode: 'difference' }}
        >
            <style>{`
                :root {
                    --nav-color: #ffffff;
                }
                .nav-link {
                    position: relative;
                    color: var(--nav-color);
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1px;
                    bottom: -2px;
                    left: 0;
                    background-color: var(--nav-color);
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
            `}</style>
            <button
                className="nav-link"
                onClick={onMenuClick}
                style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '6px', padding: 0,
                }}
            >
                <span style={{ fontSize: '0.85rem' }}>☰</span> MENU
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                <a href="#contact" className="nav-link">CONTACT US</a>
                <a href="#get-started" className="nav-link">GET STARTED</a>
            </div>
        </div>
    );
}
