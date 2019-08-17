import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CartList from "../../components/CartList/CartList";

class CartPage extends PureComponent {
  render() {
    return <CartList />;
  }
}

CartPage.propTypes = {};

export default CartPage;
