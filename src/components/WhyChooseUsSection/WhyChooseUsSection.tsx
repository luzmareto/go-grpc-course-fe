function WhyChooseUsSection() {
    return (
        <div className="why-choose-section before-footer-section">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6">
                        <h2 className="section-title">Why Choose Us</h2>
                        <p>We believe in quality, comfort, and style. Our expertly crafted furniture is designed to enhance your space with elegance and durability. Shop with confidence and transform your home effortlessly.</p>

                        <div className="row my-5">
                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/truck.svg" alt="Fast & Free Shipping" className="img-fluid" />
                                    </div>
                                    <h3>Fast & Free Shipping</h3>
                                    <p>Get your favorite pieces delivered to your doorstep quickly, without any extra cost.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/bag.svg" alt="Easy to Shop" className="img-fluid" />
                                    </div>
                                    <h3>Easy to Shop</h3>
                                    <p>Seamless browsing, secure payments, and a hassle-free shopping experience—right at your fingertips.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/support.svg" alt="24/7 Support" className="img-fluid" />
                                    </div>
                                    <h3>24/7 Support</h3>
                                    <p>Need help? Our dedicated support team is available anytime to assist you.</p>
                                </div>
                            </div>

                            <div className="col-6 col-md-6">
                                <div className="feature">
                                    <div className="icon">
                                        <img src="images/return.svg" alt="Hassle Free Returns" className="img-fluid" />
                                    </div>
                                    <h3>Hassle-Free Returns</h3>
                                    <p>Not satisfied? Return your item easily with our stress-free return policy.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="img-wrap">
                            <img src="images/why-choose-us-img.jpg" alt="Why Choose Us" className="img-fluid" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WhyChooseUsSection;
