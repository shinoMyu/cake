import { useLanguage } from "../../../../context/LanguageContext"
import { locales } from "../../../../locales";
import { useState } from "react";
import ProductCard from "./ProductCard";
import CategoryFilter from "./CategoryFilter";
import { cakeData } from "../../../../data/cakeData";
import "./products.css"

const Products = () => {
    const { language } = useLanguage();
    const text = locales[language];

    const [category, setCategory] = useState("all");
    const filteredCakes =
        category === "all"
            ? cakeData
            : cakeData.filter(cake => cake.category === category);

    return <section id="products">
        <div className="product-wrapper">
            <h2 className={`section-title ${language}`}>
                {text.products.sectionTitle}
            </h2>
            <CategoryFilter category={category} setCategory={setCategory}/>
            <div className="product-grid">
                {filteredCakes.map(cake => (
                    <ProductCard key={cake.id} cake={cake} />
                ))}
            </div>
            <div id="lightbox" className="lightbox">
                {/* <img id="lightbox-img" className="lightbox-img" src="" alt="Expanded Image" /> */}
                <span className="close-btn">✕</span>
                {/* <img src="image/left-arrow.png" className="arrow left" alt="Left" />
                    <img src="image/right-arrow.png" className="arrow right" alt="Right" /> */}
            </div>
        </div>
    </section>
}

export default Products;