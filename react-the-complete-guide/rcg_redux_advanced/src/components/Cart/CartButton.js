import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const quantity = useSelector((state) => state.cart.totalAmount);

  const toggleHandler = (event) => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
