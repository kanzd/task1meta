import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Compo from "./component/fol1/index";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Compo />}>

      </Route>
    
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
