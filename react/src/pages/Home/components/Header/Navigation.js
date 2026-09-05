import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import menu from "../../../../assets/image/menu.png";

const navItems = [
    { label: "Home", type: "home" },
    { label: "Introduction", type: "section", target: "introduction" },
    { label: "Products", type: "section", target: "products" },
    { label: "About", type: "section", target: "about" }
];

const Navigation = ({ type }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); 
    const location = useLocation();
    
    const handleMenuToggle = () => {
        setIsMenuOpen(prev => !prev);
    };
    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    const handleHomeClick = () => {
        handleMenuClose();
        if (location.pathname !== "/") {
            navigate("/");
            return;
        }

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    
    const handleSectionClick = (target) => {
        document.getElementById(target)?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        handleMenuClose();
    };

    const renderNavItem = (item) => {
        if (item.type === "home") {
            return (
                <button type="button" className="nav-section-button" onClick={handleHomeClick} >
                    {item.label}
                </button>
            );
        }

        return (
            <button
                type="button"
                className="nav-section-button"
                onClick={() => handleSectionClick(item.target)}
            >
                {item.label}
            </button>
        );
    };

    if (type === "desktop") {
        return (
            <nav className="navMenu-desktop">
                <ul>
                    {navItems.map(item => (
                        <li key={item.label}>
                            {renderNavItem(item)}
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
                            <li key={item.label}>
                                {renderNavItem(item)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navigation;