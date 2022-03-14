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
import RushInfo from './components/RushInfo';
import LiamInfo from './components/LiamInfo';

function App() {
  return (
    <div className="App">
     
      <Router>
       
         <Routes>
         <Route path="/" exact element={<Homepage />}/>
         <Route path="/cuteinfo"  element={<Info />}/>
         <Route path="/rushinfo"  element={<RushInfo />}/>
         <Route path="/liaminfo"  element={<LiamInfo />}/>
         </Routes>
        
      </Router>
    </div>
  );
}

export default App;
