import "./products.css"

const Products = () => {
    return <section id="products">
            <div className="product-wrapper">
                <h2 className="section-title en">Products</h2>
                <h2 className="section-title traditional" style={{display: "none"}}>蛋糕</h2>
                <h2 className="section-title jp" style={{display: "none"}}>ケーキ</h2>
                <div className="category-filter"></div>
                <div id="cakeContainer" className="product-grid"></div>
                <div id="lightbox" className="lightbox">
                    <img id="lightbox-img" className="lightbox-img" src="" alt="Expanded Image" />
                    <span className="close-btn">✕</span>
                    {/* <img src="image/left-arrow.png" className="arrow left" alt="Left" />
                    <img src="image/right-arrow.png" className="arrow right" alt="Right" /> */}
                </div>
            </div>
        </section>
}

export default Products;