import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class ProductItemCategory extends PureComponent {
  render() {
    const { productItem } = this.props;
    return (
      <div class="product-item accessories">
        <div class="product discount product_filter">
          <div class="product_image">
            <img src={productItem.image} alt="" />
          </div>
          <div class="favorite favorite_left" />
          <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
            <span>-$20</span>
          </div>
          <div class="product_info">
            <h6 class="product_name">
              <a href="single.html">{productItem.name}</a>
            </h6>
            <div class="product_price">
              {productItem.salePrice}
              <span>{productItem.originalPrice}</span>
            </div>
          </div>
        </div>
        <div class="red_button add_to_cart_button">
          <a href="#">add to cart</a>
        </div>
      </div>
    );
  }
}

ProductItemCategory.propTypes = {};

export default ProductItemCategory;
