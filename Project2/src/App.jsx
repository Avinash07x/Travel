import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Travel from './page/Travel';
import ContactForm from './components/ContactForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Travel />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;