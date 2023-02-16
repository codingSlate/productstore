import './App.css';
import {Routes, Route, useNavigate, createSearchParams} from 'react-router-dom'
import {Products} from './pages/Products'
import {Product} from './pages/Product'
import {Cart} from './pages/Cart'
import {NotFound} from './pages/NotFound'
import Navbar from './Components/Nabvar/Navbar';

import { useCart } from './Context/cart';

function App() {
 const navigate = useNavigate()
 const {cartItemCount} = useCart()

function onSearch(searchQuery){
  navigate(`/?${createSearchParams({q:searchQuery})}`)
  
}

  return (
    <div>
      <Navbar onSearch={onSearch} cartItemCount ={cartItemCount()}/>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
