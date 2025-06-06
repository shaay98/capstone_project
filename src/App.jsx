import './styles/App.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Index from './components/Index.jsx';
import ProductList from './ProductList.jsx';
import ProductPage from './ProductPage.jsx';
import Footer from './components/Footer.jsx';


function App() {
 
  return (
    <>
     <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
            <ProductList />
              <Index />
            </>
          }
        />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App