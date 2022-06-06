
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

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Shop></Shop>}>  </Route>
          <Route path="/review" element={<OrderReview></OrderReview>}>  </Route>
          <Route path="*" element={<NotFound></NotFound>}>  </Route>
          <Route path="/placeorder" element={<PlaceOrder></PlaceOrder>}>  </Route>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
