import ResponsiveAppBar from '../components/organisms/AppBar';
import Footer from '../components/organisms/Footer';
import ProductContent from '../components/organisms/Product_Content';

const ProductPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <ResponsiveAppBar />
                <div style={{ flex: 1 }}>
                    <ProductContent/>
                </div>
                <Footer />
        </div>
    );
}
export default ProductPage;