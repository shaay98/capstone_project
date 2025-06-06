import './styles/App.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Index from './components/Index.jsx';
import Product from './Product.jsx';
import ProductList from './ProductList.jsx';
import ProductPage from './ProductPage.jsx';
import Footer from './components/Footer.jsx';


function App() {
 
  return (
    <>
    <Header />
      <Index />
      <Product productId="123" />
      <Footer />
      <Routes>
      <Route path="/" element={<ProductList />} />
     <Route path="/product/:productId" element={<ProductPage/>} />
      </Routes>

    </>
  )
}

export default App