import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import useStyle from "./styles";
import { useDispatch } from "react-redux";
import {ProductAction} from '../../../utils/store'


const CartItem = ({ item }) => {
const dispatch = useDispatch()
  const classes = useStyle();

  const AddtoCart = ()=>{
   console.log("add")
dispatch(ProductAction.AddToBasket(item))
  };

  const RemoveFromCart = ()=>{
   console.log("remove")
   dispatch(ProductAction.removeFromBasket(item))
  }

  return (
    <Card className="cart-item">
      <CardMedia image={item.image} alt={item.name} className={classes.media} style={{backgroundSize:'contain'}} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">$ {item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() => RemoveFromCart()}
          >
            -
          </Button>
          <Typography>&nbsp;{item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() => AddtoCart()}
          >
            +
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
