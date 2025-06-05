import './styles/App.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Index from './components/Index.jsx';
import ProductServices from './ProductServices.jsx'
import Product from './Product.jsx';
import Footer from './components/Footer.jsx';

function App() {
 
  return (
    <>
      <Header/>
      <Index/>
      <ProductServices/>
      <Product/>
       <Footer/>
      <Routes>
        <Route path ="/Header" element={<Header/>}/>
        <Route path="/Index" element={<Index/>}/>
        <Route path="/ProductServices" element={<ProductServices/>}/>
        <Route path="/Product" element={<Product/>}/>
         <Route path="/Footer" element={<Footer/>}/>
      </Routes>
    </>
  )
}

export default App
