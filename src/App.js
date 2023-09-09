import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home />}></Route>
          <Route path='/services' element={ <Services />}></Route>
          <Route path='/products' element={ <Products />}></Route>
          <Route path='/sign-up' element={ <SignUp />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
//<Route path='/' exact component={Home} />
export default App;