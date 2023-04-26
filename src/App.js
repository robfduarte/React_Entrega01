import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Notification, NotificactionProvider } from './notification/NotificationService';
import Cart from './components/Cart/Cart';
import Checkout from './components/CheckOut/Checkout';


const App = () => {
  return (
    <div className="App">
    <NotificactionProvider>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path= '/' element= {<ItemListContainer greeting={"Welcome please select a service"}/>} />
            <Route path= '/category/:categoryId' element={<ItemListContainer greeting={"Services by category"}/>} />
            <Route path= '/item/:itemId' element={<ItemDetailContainer />} />
            <Route path= '/cart' element={<Cart />} />
            <Route path= '/checkout' element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </NotificactionProvider>
      
    </div>
  );
}

export default App;
