import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ProductItem from "../ProductItem/ProductItem";

class ProductList extends PureComponent {
  render() {
    const { productList } = this.props;
    return (
      <div
        className="product-grid5"
        data-isotope='{ "itemSelector": ".product-item", "layoutMode": "fitRows" }'
      >
        {productList.map(productItem => (
          <ProductItem key={productItem.id} productItem={productItem} />
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {};

export default ProductList;
