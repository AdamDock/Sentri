import ResponsiveAppBar from '../components/organisms/AppBar';
import Footer from '../components/organisms/Footer';
import Extra from '../components/organisms/Home_Content';

const BlogPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <ResponsiveAppBar />
                <div style={{ flex: 1 }}>
                    Blog
                    <Extra />
                </div>
                <Footer />
        </div>
    );
}
export default BlogPage;