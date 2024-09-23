import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDetails from './Components/CardsDetails';
import Cards from './Components/Cards';
import {Routes,Route} from "react-router-dom";
import Headers from './Components/Headers'
import Home from './Components/Home';

function App() {
  return (
  <>
   <Headers />
   <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/add-to-cart' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
  </>
  );
}

export default App;