import { useLanguage } from "../../../../context/LanguageContext";
import { locales } from "../../../../locales";

const CategoryFilter = ({ category, setCategory }) => {
  const { language } = useLanguage();
  const text = locales[language];

  const buttons = [
    "all",
    "roll",
    "cupcake",
    "whole",
    "others"
  ];

  return (
    <div className="category-filter">
      {buttons.map(type => (
        <button
          key={type}
          className={`${language} ${category === type ? "active" : ""}`}
          onClick={() => setCategory(type)}
        >
          {text.products.category[type]}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;