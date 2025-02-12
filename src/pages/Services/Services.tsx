import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ProductHighlightSection from '../../components/ProductHighlightSection/ProductHighlightSection';

const Services = () => {
    return (
        <>
            <HeroSection
                title="Services"
                subtitle="Experience top-notch interior design solutions tailored to your needs. From concept to completion, we bring your vision to life with elegance and precision."
            />

            <ServicesSection />

            <ProductHighlightSection beforeFooter />
        </>
    );
};

export default Services;
