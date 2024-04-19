import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Header/Navbar';
import Product from './Component/Product/Product';
import ProductDetail from './Component/Product/ProductDetail';
import Login from './Component/Login/Login';
import Signin from './Component/SignIn/Signin';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/Product/:id' element={<ProductDetail />} />
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>

      {/* <Login/> */}

    </div>
  );
}

export default App;
