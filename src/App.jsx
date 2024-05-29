import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Chitplans from "./components/chitplans/Chitplans";
import Generalinfo from "./components/Generalinfo/Generalinfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Router>
        <Layout>
          <Routes>
          
            {/* <Route exact path="/" component={Home} />  */} 
            <Route exact path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/chitplans' element={<Chitplans/>} />
            <Route path='/generalinfo' element={<Generalinfo/>} />
           
          </Routes>
        </Layout>
      </Router>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
