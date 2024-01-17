import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { useSelector } from 'react-redux';

const Reviews = () => {
 const basket = useSelector(state=>state.basket);
const totalPrice = useSelector(state => state.totalPrice)

  return (
   <>
   <Typography variant="h6" gutterBottom>Order summary</Typography>
   <List disablePadding>
     {basket.map((product) => (
       <ListItem style={{ padding: '10px 0' }} key={product.name}>
         <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
         <Typography variant="body2">{product.quantity}</Typography>
       </ListItem>
     ))}
     <ListItem style={{ padding: '10px 0' }}>
       <ListItemText primary="Total" />
       <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
        $ {totalPrice}
       </Typography>
     </ListItem>
   </List>
 </>
  )
}

export default Reviews
