import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class CartItem extends PureComponent {
  render() {
    return (
      <tr>
        <th scope="row">
          <img
            src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
            alt=""
            class="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>Iphone 6 Plus</strong>
          </h5>
        </td>
        <td>15$</td>
        <td class="center-on-small-only">
          <div class="quatity">
            <span class="qty">1 </span>
          </div>
          <div class="btn-group radio-group" data-toggle="buttons">
            <label
              class="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label
              class="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>15$</td>
        <td>
          <button
            type="button"
            class="btn btn-sm btn-red waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

CartItem.propTypes = {};

export default CartItem;
