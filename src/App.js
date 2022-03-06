import logo from './logo.svg';
import './App.css';

import Homepage from './components/Homepage'
import Info from './components/Info'
import {
  BrowserRouter as Router,
 Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     
      <Router>
       
         <Routes>
         <Route path="/" exact element={<Homepage />}/>
         <Route path="/info"  element={<Info />}/>
         </Routes>
        
      </Router>
    </div>
  );
}

export default App;
