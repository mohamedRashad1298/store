import Grid from "@mui/material/Grid";
import Product from "./Product/Product";
import useStyle from './styles'
import data from "../../utils/product.json"

const Products = () => {

  const classes = useStyle()


  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justifyContent="center" spacing={4}>
         {data.map((items) => (
          <Grid key={items.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={items} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
