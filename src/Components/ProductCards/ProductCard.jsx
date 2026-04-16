import { use, useState } from "react";

import { toast } from "react-toastify";
import Cart from "./Cart/Cart";
import Product from "./Product/Product";

const ProductCard = ({ productPromise, cart, setCart }) => {
  const productData = use(productPromise);
  const [view, setView] = useState("product");

  const handleCart = (product) => {
    setCart([...cart, product]);
    toast(`${product.name} is added to cart`);
  };
  return (
    <div>
      {/* product section headings */}
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-4xl font-bold">Premium Digital Tools</h1>
        <p className="text-black/50">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.{" "}
        </p>
        <div>
          <button
            onClick={() => setView("product")}
            className={`btn rounded-l-2xl ${view === "product" ? "btn-primary" : ""}`}
          >
            Products
          </button>
          <button
            onClick={() => setView("cart")}
            className={`btn rounded-r-3xl ${view === "cart" ? "btn-primary" : ""}`}
          >
            Cart({cart.length})
          </button>
        </div>
      </div>
      <div>
        {view === "product" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch p-10">
            {/* product cards section */}
            {productData.map((product, index) => (
              <Product
                key={index}
                product={product}
                handleCart={handleCart}
                cart={cart}
              ></Product>
            ))}
          </div>
        ) : (
          <Cart cart={cart} setCart={setCart}></Cart>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
