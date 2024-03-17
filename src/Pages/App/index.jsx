/* eslint-disable no-unused-vars */
import Navbar from "../../Components/Navbar";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "../../Context/index";
import { AppRoutes } from "../../Routes/index";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
