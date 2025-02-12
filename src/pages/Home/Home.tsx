import ProductHighlightSection from '../../components/ProductHighlightSection/ProductHighlightSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection/WhyChooseUsSection';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <>
            <HeroSection
                title='Modern Interior Design Studio'
                subtitle='Transform your space with timeless elegance and modern aesthetics. We craft interiors that blend functionality with sophistication, tailored to your unique style.'
            />

            <ProductHighlightSection />

            <WhyChooseUsSection />
        </>
    );
};

export default Home;
