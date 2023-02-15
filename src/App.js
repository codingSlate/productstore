import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Products} from './pages/Products'
import {Product} from './pages/Product'
import {Cart} from './pages/Cart'
import {NotFound} from './pages/NotFound'
import Navbar from './Components/Nabvar/Navbar';

function App() {


function onSearch(){
  
}
function cartItemCount(){
  
}
  return (
    <div>
      <Navbar onSearch={onSearch} cartItemCount ={cartItemCount}/>
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
