import './styles/App.scss'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Index from './components/Index.jsx';
import Footer from './components/Footer.jsx';

function App() {
 
  return (
    <>
      <Header/>
      <Index/>
      <Footer/>
      <Routes>
        <Route path ="/Header" element={<Header/>}/>
        <Route path="/Index" element={<Index/>}/>
        <Route path="/Footer" element={<Footer/>}/>
      </Routes>
    </>
  )
}

export default App
