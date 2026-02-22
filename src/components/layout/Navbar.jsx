/**
 * Navbar — top bar on the landing hero
 * Props:
 *  onMenuClick — opens the Sidebar
 *  onGetStartedClick — opens the Login form modal
 */
export default function Navbar({ onMenuClick, onGetStartedClick }) {
    return (
        <div
            className="navbar fixed top-0 left-0 w-full py-7 px-10 flex justify-between items-center"
            style={{ zIndex: 100, mixBlendMode: 'difference' }}
        >
            <style>{`
                :root {
                    --nav-color: #EAE5D9;
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
                <button
                type="button"
                className="nav-link"
                onClick={() => onGetStartedClick?.()}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
                GET STARTED
            </button>
            </div>
        </div>
    );
}
