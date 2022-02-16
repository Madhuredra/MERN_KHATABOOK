import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './Component/LandingPage/LandingPage';
import Register from "./Component/Register/Register";
import HomePage from "./Component/HomePage/HomePage";
import { useState } from "react";

function App() {
  const [user,setLoginUser] = useState({

  });
  return (
    
    <Router>
      <div className="App">
        <main>
          <Routes>
          <Route exact path="/homepage" 
            element=
            {
              <HomePage setLoginUser={setLoginUser}/>
            }
            />  
          <Route path="/" element = {<LandingPage setLoginUser={setLoginUser}/>}/>
          <Route path="/register" element = {<Register/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
