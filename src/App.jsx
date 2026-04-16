import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import Pricing from "./Components/Pricing/Pricing";
import ProductCard from "./Components/ProductCards/ProductCard";
import Stats from "./Components/Stats/Stats";
import Steps from "./Components/Steps/Steps";
import Workflow from "./Components/Workflow/Workflow";
const productPromise = fetch("productData.json").then((res) => res.json());

// console.log(productPromise);
function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <NavBar cart={cart}></NavBar>
      <Hero></Hero>
      <Stats></Stats>
      <ProductCard
        cart={cart}
        setCart={setCart}
        productPromise={productPromise}
      ></ProductCard>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
