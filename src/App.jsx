import "./App.css";
import Hero from "./Components/Hero/Hero";
import NavBar from "./Components/NavBar/NavBar";
import ProductCard from "./Components/ProductCards/ProductCard";
import Stats from "./Components/Stats/Stats";
const productPromise = fetch("productData.json").then((res) => res.json());
// console.log(productPromise);
function App() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Stats></Stats>
      <ProductCard productPromise={productPromise}></ProductCard>
    </>
  );
}

export default App;
