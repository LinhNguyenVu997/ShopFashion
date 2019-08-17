import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import ProductDetailTab from "../../components/ProductDetailTab/ProductDetailTab";
import Axios from "axios";

class SinglePage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {},
      loading: true
    };
  }

  componentDidMount = async () => {
    let response = await Axios.get(
      `http://api.demo.nordiccoder.com/api/products/${
        this.props.match.params.productId
      }`
    );
    this.setState({ productDetail: response.data.body, loading: false });
  };
  render() {
    const { loading, productDetail } = this.state;
    if (loading) return <p>........Loading</p>;
    return (
      <div className="container single_product_container">
        <Breadcrumbs />
        <ProductDetail productDetail={productDetail} />
        <ProductDetailTab />
      </div>
    );
  }
}

SinglePage.propTypes = {};

export default SinglePage;
