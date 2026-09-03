import { useLanguage } from "../../../../context/LanguageContext";
import { locales } from "../../../../locales";

const ProductCard = ({ cake, onImageClick }) => {
    const { language } = useLanguage();
    const text = locales[language];
    return(
        <div className={`product-item ${cake.category}`}>
            <img className = "product-img" src={cake.image} alt={cake.name[language]} onClick={onImageClick}/>
            <h3 className={language}>{cake.name[language]}</h3>
            {cake.flavor?.[language] && (
                <p className={language}>
                    <strong>{text.products.product.flavor}:</strong>{" "}
                    {cake.flavor[language]}
                </p>
            )}
            {cake.size?.[language] && (
                <p className={language}>
                    <strong>{text.products.product.size}:</strong>{" "}
                    {cake.size[language]}
                </p>
            )}
            {cake.style?.[language] && (
                <p className={language}>
                    <strong>{text.products.product.style}:</strong>{" "}
                    {cake.style[language]}
                </p>
            )}
            {cake.description?.[language] && (
                <p className={`description ${language}`}>
                    {cake.description[language]}
                </p>
            )}
        </div>
    )
    
};

export default ProductCard;