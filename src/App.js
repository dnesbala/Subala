import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Navbar, Services, Shop, Appointment, Error404 } from "./pages";
import Cart from "./pages/Cart/Cart";
import ProductContextProvider from "./context/ProductContext";

import "./App.css";

function App() {
  return (
    <div className="app">
      <ProductContextProvider>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/shop" component={Shop} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/cart" component={Cart} />
          <Route component={Error404} />
        </Switch>
      </ProductContextProvider>
    </div>
  );
}

export default App;
