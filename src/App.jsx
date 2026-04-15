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
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Stats></Stats>
      <ProductCard productPromise={productPromise}></ProductCard>
      <Steps></Steps>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  );
}

export default App;
