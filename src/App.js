import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Footer from './components/Footer';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>

      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
