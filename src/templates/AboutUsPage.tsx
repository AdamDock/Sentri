import ResponsiveAppBar from '../components/organisms/AppBar';
import Footer from '../components/organisms/Footer';
import AboutContent from '../components/organisms/About_Content';
const AboutUsPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <ResponsiveAppBar />
                <div style={{ flex: 1 }}>
                    <AboutContent />
                    About Us
                </div>
                <Footer />
        </div>
    );
}
export default AboutUsPage;