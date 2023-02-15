import './App.css';
import {Routes, Route, useNavigate, createSearchParams} from 'react-router-dom'
import {Products} from './pages/Products'
import {Product} from './pages/Product'
import {Cart} from './pages/Cart'
import {NotFound} from './pages/NotFound'
import Navbar from './Components/Nabvar/Navbar';

function App() {
 const navigate = useNavigate()

function onSearch(searchQuery){
  navigate(`/?${createSearchParams({q:searchQuery})}`)
  
}
function cartItemCount(){
  
}
  return (
    <div>
      <Navbar onSearch={onSearch} cartItemCount ={2}/>
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
