import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ProductItemCategory from "./../ProductItemCategory/ProductItemCategory";

class ProductListCategory extends PureComponent {
  render() {
    const { productList } = this.props;
    return (
      <div className="product-grid">
        {productList.map(productItem => (
          <ProductItemCategory key={productItem.id} productItem={productItem} />
        ))}
      </div>
    );
  }
}

ProductListCategory.propTypes = {};

export default ProductListCategory;
