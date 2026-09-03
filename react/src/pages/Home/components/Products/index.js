import { useLanguage } from "../../../../context/LanguageContext"
import { locales } from "../../../../locales";
import { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import { cakeData } from "../../../../data/cakeData";
import "./products.css"
import Lightbox from "./Lightbox";
import { useAuth } from "../../../../context/AuthContext";
import LockedSection from "../../../../components/LockedSection";

const Products = () => {
    const { language } = useLanguage();
    const text = locales[language];

    const { isLoggedIn } = useAuth();

    const [category, setCategory] = useState("all");
    const filteredCakes =
        category === "all"
            ? cakeData
            : cakeData.filter(cake => cake.category === category);

    const [selectedIndex, setSelectedIndex] = useState(null);

    return <section id="products">
        <div className="product-wrapper">
            <h2 className={`section-title ${language}`}>
                {text.products.sectionTitle}
            </h2>
            <div className={!isLoggedIn ? "blurred" : ""}>
                <CategoryFilter category={category} setCategory={setCategory} />
                <div className="product-grid">
                    {filteredCakes.map((cake, index) => (
                        <ProductCard key={cake.id} cake={cake} onImageClick={() => setSelectedIndex(index)} />
                    ))}
                </div>
                <Lightbox cakes={filteredCakes} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
            </div>
            {!isLoggedIn && <LockedSection />}
        </div>
    </section>
}

export default Products;