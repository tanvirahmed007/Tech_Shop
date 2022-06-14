
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import NotFound from './components/NotFound/NotFound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Shop></Shop>}>  </Route>
          <Route path="/review" element={<OrderReview></OrderReview>}>  </Route>
          <Route path="/placeorder" element={<PlaceOrder></PlaceOrder>}>  </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="*" element={<NotFound></NotFound>}>  </Route>
          
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
