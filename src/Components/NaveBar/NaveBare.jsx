import {
  AppBar,
  Toolbar,
  Badge,
  Typography,
  IconButton,
} from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import Logo from '../../assets/logo.jpg'
import useStyle from './styles'
import {  useSelector } from "react-redux";
import {NavLink} from "react-router-dom"

const NaveBare = () => {
const classes = useStyle()
const products = useSelector(state=>state.totalQuantity)


  return <>
  <AppBar position="fixed" className={classes.appBar} color={"inherit"}>
      <Toolbar className={classes.change}>
         <Typography variant="h5" className={classes.title}  color={"inherit"}>
          <NavLink to='/home' style={{textDecoration:"none" , color:"white",display:"flex"}}>
          <img src={Logo} height="25px" className={classes.image} alt="Logo"/>
          Rashad Store
          </NavLink>
         </Typography>
         <div className={classes.grow}>
         </div>
         <div className={classes.button}>
              <NavLink to='/cart' style={{textDecoration:"none" , color:"white"}}>
           <IconButton aria-label="Shop Cart" color="inherit">
             <Badge badgeContent={products} color="secondary" >
              <FaShoppingCart/>
             </Badge>
           </IconButton>
              </NavLink>
         </div>
      </Toolbar>
  </AppBar>
  </>;
};

export default NaveBare;
