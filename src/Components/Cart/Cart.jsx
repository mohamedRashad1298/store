import { Grid, Typography, Container, Divider } from "@mui/material";
import { useSelector } from "react-redux";
import useStyle from "./styles";
import Css from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";
import { useDispatch } from "react-redux";
import { ProductAction } from "../../utils/store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Cart = () => {
  const basket = useSelector((state) => state.basket);
  const totalPrice = useSelector((state) => state.totalPrice);
  const classes = useStyle();
  const isEmpty = basket.length === 0;
  const dispatch = useDispatch();
const history = useHistory()

  const EmaptyCartHandle = () => {
    dispatch(ProductAction.emaptyBasket());
  };

  const EmptyCart = () => {
    return (
      <Typography varient="subtitle">
        You have no items in your Cart , Start adding some!
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <div className={Css.Products__list}>
        <Grid container spacing={3} gap={3}>
          {basket.map((item) => (
            <Grid key={item._id} xs={12} sm={4} lg={3}>
              <CartItem item={item} />
            </Grid>
          ))}
        </Grid>
        <Divider style={{ marginTop: "20px" }} />
        <div className={classes.cardDetails}>
          <Typography
            varient="h4"
            style={{ fontWeight: "bold", fontSize: "24px" }}
          >
            SubTotal:$ {totalPrice}
          </Typography>
          <div>
            <button
              className={Css.emptyButton}
              onClick={() => EmaptyCartHandle()}
            >
              Empty Cart
            </button>
            <button className={Css.checkoutButton} onClick={()=>history.replace('/checkout')}>CheckOut</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Container className={Css.container}>
        <h2 className={Css.title}>Your cart Items</h2>
        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </Container>
    </>
  );
};

export default Cart;
