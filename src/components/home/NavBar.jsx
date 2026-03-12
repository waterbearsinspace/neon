import { useState } from "react";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuLinks = ["A", "B", "C", "D", "E"];
    const footerLinks = ["A", "B", "C", "D", "E"];

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isMenuOpen) {
            setIsMenuOpen(false);
        }
    });

    return (
        <>
            <div
                className={`background ${isMenuOpen ? "open" : ""}`}
                onClick={() => {
                    if (isMenuOpen) {
                        setIsMenuOpen(!isMenuOpen);
                    }
                }}
            />
            <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
                <div className="nav-links">
                    <section className="left-links">
                        <div
                            className={`burger ${isMenuOpen ? "open" : ""}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        ></div>
                        <p>NEON</p>
                    </section>
                    <section className="right-links">
                        <a href="">A</a>
                        <a href="">B</a>
                        <a href="">C</a>
                        <a href="">D</a>
                    </section>
                </div>
                <section className={`menu-links ${isMenuOpen ? "open" : ""}`}>
                    <section>
                        {menuLinks.map((link) => (
                            <a className="menu-link" href="" key={link}>
                                <span className="arrow">→</span>
                                <span>{link}</span>
                            </a>
                        ))}
                    </section>
                    <section className="footer-links">
                        {footerLinks.map((link) => (
                            <a className="footer-link" href="" key={link}>
                                <span>{link}</span>
                            </a>
                        ))}
                    </section>
                </section>
            </nav>
        </>
    );
}
