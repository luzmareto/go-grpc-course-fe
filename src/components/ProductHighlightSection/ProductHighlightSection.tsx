import { Link } from 'react-router-dom';

interface ProductHighlightSectionProps {
    beforeFooter?: boolean;
}

function ProductHighlightSection(props: ProductHighlightSectionProps) {
    return (
        <div className={`product-section ${props.beforeFooter ? 'before-footer-section' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                        <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
                        <p className="mb-4">Experience the perfect blend of craftsmanship and durability. Our furniture is made with premium materials to elevate your space with style and comfort.</p>
                        <p><Link to="/shop" className="btn">Explore</Link></p>
                    </div>

                    {/* Product Items */}
                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <Link className="product-item" to="/cart">
                            <img src="/images/product-1.png" className="img-fluid product-thumbnail" alt="Nordic Chair" />
                            <h3 className="product-title">Nordic Chair</h3>
                            <strong className="product-price">$50.00</strong>
                            <span className="icon-cross">
                                <img src="/images/cross.svg" className="img-fluid" alt="Cross" />
                            </span>
                        </Link>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <Link className="product-item" to="cart.html">
                            <img src="images/product-2.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Kruzo Aero Chair</h3>
                            <strong className="product-price">$78.00</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </Link>
                    </div>

                    <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                        <Link className="product-item" to="cart.html">
                            <img src="images/product-3.png" className="img-fluid product-thumbnail" />
                            <h3 className="product-title">Ergonomic Chair</h3>
                            <strong className="product-price">$43.00</strong>

                            <span className="icon-cross">
                                <img src="images/cross.svg" className="img-fluid" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductHighlightSection;
