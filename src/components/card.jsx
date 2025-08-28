import React from "react";
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { useDispatch} from "react-redux";
import { AddItem } from "../redux/CartSlice";
import { toast } from "react-toastify";
function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();
// const cartItems = useSelector((state) => state.cart);
// const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);
  // const cartItems = useSelector((state) => state.cart?.items || []);
  // const cartLength = Array.isArray(cartItems) ? cartItems.length : Object.keys(cartItems).length;
  // console.log("Cart Items:", cartItems);

  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg shadow-lg flex flex-col gap-3 hover:border-2 border-green-300">
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">Rs {price}/-</div>

        <div className="flex justify-center items-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full p-3 rounded-lg bg-green-500 text-gray-700 hover:bg-green-400 transition-all"
        onClick={() => {
      
          // const existingItem = cartItems.find((item) => item.id === id);
          // if (existingItem && existingItem.qty >= 5) {
          //   toast.error("You can only add max 5 quantity of this dish");
          //   return;
          // }
          // if (totalQty >= 20) {
          //   toast.error("You can only purchase max 20 items to the cart");
          //   return;
          // }
          dispatch(
            AddItem({ id: id, name: name, price: price, image: image, qty: 1 })
          );
          toast.success("Item Added to Cart");
        }}
      >
        Add to dish
      </button>
    </div>
  );
}
export default Card;
