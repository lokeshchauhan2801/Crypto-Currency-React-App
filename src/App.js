import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className='main-body'>
    <Navbar />
    <div style={{ flex: 1 }}>
    <BrowserRouter >
      <Routes>
        <Route path='./' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
    <Home/>
    </div>
    <Footer />
  </div>
  );
}

export default App;
