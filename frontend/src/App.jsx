import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import HomeScreen from "./Screen/HomeScreen";
import SingleProductScreen from "./Screen/SingleProductScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="mt-[72px]">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<SingleProductScreen />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
