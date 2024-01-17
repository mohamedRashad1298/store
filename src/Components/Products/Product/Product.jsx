import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { MdAddShoppingCart } from "react-icons/md";
import useStyle from './styles'
import { useDispatch } from 'react-redux';
import {ProductAction} from '../../../utils/store'

const Product = ({product}) => {
 const classes = useStyle();
const dispatch = useDispatch();

const addToCart = ()=>{
  dispatch(ProductAction.AddToBasket(product))
}

  return (
    <Card className={classes.roots}>
      <CardMedia style={{backgroundSize:"contain"}} className={classes.media} image={product.image}/>
      <CardContent>
         <div className={classes.content}>
          <Typography varient="h5" gutterBottom>
           {product.name}
          </Typography>
          <Typography varient="h5" >
          <span>$</span> {product.price}
          </Typography>
         </div>
         <Typography varient="h2" color="textSecondary">
           {product.description}
          </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions} onClick={addToCart}>
      <IconButton aria-label='Add to Cart'>
       <MdAddShoppingCart/>
      </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product
