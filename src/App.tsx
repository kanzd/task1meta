import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Compo from "./component/fol1/index";
import Details from "./component/details/index";

function App() {
  return (
    <>
    <div>
      
    </div>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Compo />}>

      </Route>
      <Route  path="/details/:id" element={<Details />}>

</Route>
    
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
