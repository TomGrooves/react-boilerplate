import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Forside from './components/forside/forside';
import Navbar from './components/navbar/navbar';
import Hoteller from './components/hoteller/hoteller';

// Forside

// Lande

// Hoteller



function App() {
  
  // Funktion til at lave fetch - sendes med ind i de komponenter der skal fetche
  async function doFetch(url){
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    }
    catch (error){
       console.log(error)
    }
  }

  // Router med routes der renderer vores componenter
  return (
    <Router>
        <Navbar/>
          <Switch>
          
          <Route path="/hoteller">
            <Hoteller doFetch={doFetch}/>
          </Route>
          
          <Route path="/">
            <Forside/>    
          </Route>

        
        </Switch>
    </Router>
  )
}

export default App;
