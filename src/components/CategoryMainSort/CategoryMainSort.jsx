import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./CategoryMainSort.scss";
import { async } from "q";
import Axios from "axios";
import ProductListCategory from "../ProductListCategory/ProductListCategory";

class CategoryMainSort extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    };
  }

  componentDidMount = async () => {
    let response = await Axios.get(
      `http://api.demo.nordiccoder.com/api/products`
    );
    this.setState({ productList: response.data.body });
    console.log(this.state.productList);
  };
  render() {
    const { productList } = this.state;
    return (
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            {/* Breadcrumbs */}
            <div className="breadcrumbs d-flex flex-row align-items-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="active">
                  <a href="index.html">
                    <i className="fa fa-angle-right" aria-hidden="true" />
                    Men's
                  </a>
                </li>
              </ul>
            </div>
            {/* Sidebar */}
            <div className="sidebar">
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Product Category</h5>
                </div>
                <ul className="sidebar_categories">
                  <li>
                    <a href="#">Men</a>
                  </li>
                  <li className="active">
                    <a href="#">
                      <span>
                        <i
                          className="fa fa-angle-double-right"
                          aria-hidden="true"
                        />
                      </span>
                      Women
                    </a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">New Arrivals</a>
                  </li>
                  <li>
                    <a href="#">Collection</a>
                  </li>
                  <li>
                    <a href="categories.html">shop</a>
                  </li>
                </ul>
              </div>
              {/* Price Range Filtering */}
              <div className="sidebar_section">
                <div className="sidebar_title">
                  <h5>Filter by Price</h5>
                </div>
                <p>
                  <input
                    type="text"
                    id="amount"
                    readOnly
                    style={{ border: 0, color: "#f6931f", fontWeight: "bold" }}
                  />
                </p>
                <div id="slider-range" />
                <div className="filter_button">
                  <span>filter</span>
                </div>
              </div>
            </div>
            {/* Main Content */}
            <div className="main_content">
              {/* Products */}
              <div className="products_iso">
                <div className="row">
                  <div className="col">
                    {/* Product Sorting */}
                    <div className="product_sorting_container product_sorting_container_top">
                      <ul className="product_sorting">
                        <li>
                          <span className="type_sorting_text">
                            Default Sorting
                          </span>
                          <i className="fa fa-angle-down" />
                          <ul className="sorting_type">
                            <li
                              className="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "original-order" }'
                            >
                              <span>Default Sorting</span>
                            </li>
                            <li
                              className="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "price" }'
                            >
                              <span>Price</span>
                            </li>
                            <li
                              className="type_sorting_btn"
                              data-isotope-option='{ "sortBy": "name" }'
                            >
                              <span>Product Name</span>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span>Show</span>
                          <span className="num_sorting_text">6</span>
                          <i className="fa fa-angle-down" />
                          <ul className="sorting_num">
                            <li className="num_sorting_btn">
                              <span>6</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>12</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>24</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="page_total">
                          <span>of</span> 3
                        </div>
                        <div id="next_page" className="page_next">
                          <a href="#">
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>

                    <ProductListCategory productList={productList} />

                    <div className="product_sorting_container product_sorting_container_bottom clearfix">
                      <ul className="product_sorting">
                        <li>
                          <span>Show:</span>
                          <span className="num_sorting_text">04</span>
                          <i className="fa fa-angle-down" />
                          <ul className="sorting_num">
                            <li className="num_sorting_btn">
                              <span>01</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>02</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>03</span>
                            </li>
                            <li className="num_sorting_btn">
                              <span>04</span>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <span className="showing_results">
                        Showing 1–3 of 12 results
                      </span>
                      <div className="pages d-flex flex-row align-items-center">
                        <div className="page_current">
                          <span>1</span>
                          <ul className="page_selection">
                            <li>
                              <a href="#">1</a>
                            </li>
                            <li>
                              <a href="#">2</a>
                            </li>
                            <li>
                              <a href="#">3</a>
                            </li>
                          </ul>
                        </div>
                        <div className="page_total">
                          <span>of</span> 3
                        </div>
                        <div id="next_page_1" className="page_next">
                          <a href="#">
                            <i
                              className="fa fa-long-arrow-right"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CategoryMainSort.propTypes = {};

export default CategoryMainSort;
