/* eslint-disable no-unused-vars */
import "./App.css";
import Navbar from "../../Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "../../Context/index";
import { AppRoutes } from "../../Routes/index";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
