import { useState } from "react";
import menu from "../../../../assets/image/menu.png";
import "./header.css";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Introduction", href: "#introduction" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" }
];

const Navigation = ({ type }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    if (type === "desktop") {
        return (
            <nav className="navMenu-desktop">
                <ul>
                    {navItems.map(item => (
                        <li key={item.href}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
    return (
        <>
            <div className="navMenu-toggle">
                <img id="menu-toggle" src={menu} alt="menu" onClick={handleMenuToggle} />
            </div>
            {isMenuOpen && (
                <div id="menu-overlay" className="menu-overlay">
                    <ul>
                        {navItems.map(item => (
                            <li key={item.href}>
                                <a href={item.href} onClick={handleMenuClose}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navigation;