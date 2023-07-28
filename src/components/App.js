import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import List from "./pages/List";
import Item from "./pages/Category";
import Category from "./pages/Category";
import About from "./pages/About";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} exact>
            
          </Route>
          <Route path='/list' element={<List />}>
          
          </Route>
          <Route path='/item' element={<Item />}>
         
          </Route>
          <Route path='/category' element={<Category />}>
           
          </Route>
          <Route path='/About' element={<About />}>
           
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
