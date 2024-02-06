import ResponsiveAppBar from '../components/organisms/AppBar';
import Footer from '../components/organisms/Footer';
import HomeContent from '../components/organisms/Home_Content';

const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <ResponsiveAppBar />
                <div style={{ flex: 1 }}>
                    <HomeContent />
                </div>
                <Footer />
        </div>
    );
}
export default HomePage;