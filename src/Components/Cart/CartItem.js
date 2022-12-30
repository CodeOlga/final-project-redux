const CartItem = ({ cartItem }) => {
  return (
    <div>
      <p> {cartItem.quantity} portion(s)</p>
    </div>
  );
};
export default CartItem;
