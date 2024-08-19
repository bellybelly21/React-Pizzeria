import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./assets/componentes/Navbar";
import Home from "./assets/componentes/Home";
import Footer from "./assets/componentes/Footer";

const App = () => {
  return (
    <>
      <MyNavbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;