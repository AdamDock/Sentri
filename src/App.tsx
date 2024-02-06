import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './templates/HomePage';
import AboutUsPage from './templates/AboutUsPage';
import ProductPage from './templates/ProductPage';
import BlogPage from './templates/BlogPage';
import NotFoundPage from './templates/NotFoundPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
    palette: {
      primary: {
        main: '#085680', // Your custom color
      },
      secondary: {
        main: '#032233', // Your custom color
      },
      text: {
          primary: '#FFE999', // Your custom color
          secondary: '#ffffff', // Your custom color
      },
    },
  });

const App = () => {
    return (
        <div>
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/Product" element={<ProductPage />} />
                    <Route path="/Blog" element={<BlogPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Router>
        </ThemeProvider>
            
        </div>
    );
}
export default App;





