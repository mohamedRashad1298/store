import NavBar from "./Components/NaveBar/NaveBare";
import { Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom";
import HomePage from "./Pages/HomePage";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/checkoutForm/Checkout";

function App() {
  return (
    <>
          <NavBar />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
