import leftArrow from "../../../../assets/image/left-arrow.png";
import rightArrow from "../../../../assets/image/right-arrow.png";
import { useEffect } from "react";

const Lightbox = ({ cakes, selectedIndex, setSelectedIndex }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setSelectedIndex(null);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [setSelectedIndex]);
    
    if (selectedIndex === null) return null;

    const cake = cakes[selectedIndex];

    const showPrev = () => {
        setSelectedIndex(prev =>
            (prev - 1 + cakes.length) % cakes.length
        );
    }

    const showNext = () => {
        setSelectedIndex(prev =>
            (prev + 1) % cakes.length
        );
    }

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    return (
        <div className="lightbox" onClick={closeLightbox}>
            <img className="lightbox-img" src={cake.image} alt={cake.name.en} onClick={(e) => e.stopPropagation()} />
            <span className="close-btn" onClick={closeLightbox}>✕</span>
            <img src={leftArrow} className="arrow left" alt="Left"
                onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                }} />
            <img src={rightArrow} className="arrow right" alt="Right"
                onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                }} />
        </div>
    )
};

export default Lightbox;