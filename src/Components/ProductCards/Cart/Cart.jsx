import { toast } from "react-toastify";

const Cart = ({ cart, setCart }) => {
  const handleRemove = (item) => {
    const updatedCart = cart.filter((p) => p.id !== item.id);
    setCart(updatedCart);
    toast(`${item.name} removed from cart`);
  };
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const handleCheckout = () => {
    const updatdCart = [];
    setCart(updatdCart);
    toast("Proceed to checkout");
  };

  //   console.log(setCart);
  return (
    <div>
      <div className="w-11/12 mx-auto border rounded-2xl p-5 border-cyan-200 mt-10">
        <h1 className="text-xl font-bold">Your Cart</h1>
        {cart.length === 0 ? (
          <p>No item added in the Cart</p>
        ) : (
          cart.map((item) => (
            <div>
              <div className="flex justify-between mt-5 p-4 rounded-xl  bg-base-200">
                <div className="flex gap-2 items-center">
                  <div>
                    <p>{item.icon}</p>
                  </div>
                  <div>
                    <h1 className="font-bold">{item.name}</h1>
                    <p className="text-black/50">${item.price}</p>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => handleRemove(item)}
                    className="btn btn-ghost text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
        <div className="flex justify-between">
          <p>Total:</p>
          <p className="font-bold">${total}</p>
        </div>
        <button
          onClick={() => handleCheckout()}
          className="btn btn-primary w-full rounded-2xl mt-4"
        >
          Proceed To Checkout
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Cart;
