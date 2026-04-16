import { Check } from "lucide-react";
const Product = ({ product, handleCart, cart }) => {
  //   console.log(product);
  const isAdded = !!cart.find((c) => c.id === product.id);
  console.log(isAdded);
  return (
    <div>
      <div className="card  bg-base-100 shadow-sm h-full ">
        {/* card description */}
        <div className="ml-auto">
          <span className="badge badge-xs badge-warning ">
            {product.tagType}
          </span>
        </div>
        <div className="card-body">
          <div className=" space-y-3">
            <span>{product.icon}</span>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <span className="text-xl">
              ${product.price}/{product.period}
            </span>
          </div>
          {/* cards features */}
          <div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {product.features.map((feature) => (
                <li className="flex items-center gap-1">
                  <Check></Check>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <button
              onClick={() => handleCart(product)}
              className="btn btn-primary btn-block rounded-3xl"
              disabled={isAdded}
            >
              {isAdded ? "Added to cart" : "Buy now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
