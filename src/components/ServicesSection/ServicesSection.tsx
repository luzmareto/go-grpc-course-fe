const services = [
    {
        icon: "images/truck.svg",
        title: "Fast & Free Shipping",
        description: "Get your orders delivered swiftly with our reliable and free shipping service."
    },
    {
        icon: "images/bag.svg",
        title: "Easy Shopping Experience",
        description: "Enjoy a seamless and hassle-free shopping journey with our intuitive platform."
    },
    {
        icon: "images/support.svg",
        title: "24/7 Customer Support",
        description: "Need help? Our dedicated support team is available round the clock to assist you."
    },
    {
        icon: "images/return.svg",
        title: "Hassle-Free Returns",
        description: "Not satisfied? We offer a straightforward return policy for a worry-free experience."
    },
    {
        icon: "images/secure-payments.svg",
        title: "Secure Payments",
        description: "Shop with confidence using our encrypted and protected payment methods."
    },
    {
        icon: "images/exclusive-offers.svg",
        title: "Exclusive Offers",
        description: "Unlock special deals and discounts available only to our valued customers."
    },
    {
        icon: "images/quality-assurance.svg",
        title: "Quality Assurance",
        description: "We ensure top-notch quality in all our products with rigorous testing."
    },
    {
        icon: "images/loyalty-rewards.svg",
        title: "Loyalty Rewards",
        description: "Earn points and enjoy benefits with our rewarding customer loyalty program."
    }
];

function ServicesSection() {
    return (
        <div className="why-choose-section">
            <div className="container">
                <div className="row my-5">
                    {services.map((service, index) => (
                        <div key={index} className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src={service.icon} alt={service.title} className="img-fluid" />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
