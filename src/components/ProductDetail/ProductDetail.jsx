import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./ProductDetail.scss";
import { Link } from "react-router-dom";

class ProductDetail extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  handleClickQuantityMinus = () => {
    if (this.state.quantity === 1) {
      return;
    } else {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };
  handleClickQuantityPlus = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  render() {
    const { productDetail } = this.props;
    const { quantity } = this.state;
    return (
      <div className="row">
        <div className="col-lg-7">
          <div className="single_product_pics">
            <div className="row">
              <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                <div className="single_product_thumbnails">
                  <ul>
                    <li>
                      <img src={productDetail.thumbnail} alt="" />
                    </li>
                    <li className="active">
                      <img src={productDetail.thumbnails[0]} alt="" />
                    </li>
                    <li>
                      <img src={productDetail.thumbnails[1]} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 image_col order-lg-2 order-1">
                <div className="single_product_image">
                  <div
                    className="single_product_image_background"
                    style={{ backgroundImage: `url(${productDetail.image})` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="product_details">
            <div className="product_details_title">
              <h2>{productDetail.name}</h2>
              <p>{productDetail.shortDescription}</p>
            </div>
            <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
              <span className="ti-truck" />
              <span>free delivery</span>
            </div>
            <div className="original_price">{productDetail.originalPrice}</div>
            <div className="product_price">{productDetail.salePrice}</div>
            <ul className="star_rating">
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star" aria-hidden="true" />
              </li>
              <li>
                <i className="fa fa-star-o" aria-hidden="true" />
              </li>
            </ul>
            <div className="product_color">
              <span>Select Color:</span>
              <ul>
                <li style={{ background: "#e54e5d" }} />
                <li style={{ background: "#252525" }} />
                <li style={{ background: "#60b3f3" }} />
              </ul>
            </div>
            <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
              <span>Quantity:</span>
              <div className="quantity_selector">
                <span className="minus">
                  <i
                    className="fa fa-minus"
                    aria-hidden="true"
                    onClick={() => this.handleClickQuantityMinus()}
                  />
                </span>
                <span id="quantity_value">{quantity}</span>
                <span className="plus">
                  <i
                    className="fa fa-plus"
                    aria-hidden="true"
                    onClick={() => this.handleClickQuantityPlus()}
                  />
                </span>
              </div>
              <div className="red_button add_to_cart_button">
                <Link to="#">add to cart</Link>
              </div>
              <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {};

export default ProductDetail;
