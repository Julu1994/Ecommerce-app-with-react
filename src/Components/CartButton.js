import classes from './CartButton.module.css';
import { uiAction } from '../Redux/Features/CartSlice';
import { useDispatch, useSelector} from 'react-redux';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const badge = useSelector(state => state.cart.totalQuantity )

  const toggleCartHandler = () =>{
    dispatch(uiAction.toggle());

  };
    return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
