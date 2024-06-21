import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Categories from './components/Categories';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import PetCare from './components/PetCare';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import Register from './components/Register';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
      <Categories />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path="/pet-grooming" element={<TaskList />} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pet-care" element={<PetCare />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  )
}

export default App