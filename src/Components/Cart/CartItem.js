import dataDishes from "../../data/dataDishes";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({ cartItem }) => {
  const dishes = dataDishes.find((item) => item.id === cartItem.dishId);
  const dispatch = useDispatch();
  return (
    <div>
      <p className="chosenDish">{dishes.name}</p>
      <p className="chosenDish"> {cartItem.quantity} portion(s)</p>
      <p className="chosenDish">Price: ${dishes.price * cartItem.quantity}</p>

      <span
        onClick={() =>
          dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
        }
      >
        <img
          className="icon"
          src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"
          alt="logo"
        />
      </span>
    </div>
  );
};
export default CartItem;
