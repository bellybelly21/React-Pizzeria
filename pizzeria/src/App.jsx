import React from 'react';
import MyNavbar from "./assets/componentes/Navbar";
import Home from "./assets/componentes/Home";
import Footer from "./assets/componentes/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

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
