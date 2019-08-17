import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import CartItem from "../CartItem/CartItem";

class CartList extends PureComponent {
  render() {
    return (
      <section class="section">
        <div class="table-responsive">
          <table class="table product-table">
            <thead class="thead-black">
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng Cộng</th>
                <th />
              </tr>
            </thead>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <td colSpan="3" />
            <td>
              <h4>
                <strong>Tổng Tiền</strong>
              </h4>
            </td>
            <td>
              <h4>
                <strong>15$</strong>
              </h4>
            </td>
            <td colSpan="3">
              <button
                type="button"
                class="btn btn-primary waves-effect waves-light"
              >
                Complete purchase
                <i class="fa fa-angle-right right" />
              </button>
            </td>
          </table>
        </div>
      </section>
    );
  }
}

CartList.propTypes = {};

export default CartList;
