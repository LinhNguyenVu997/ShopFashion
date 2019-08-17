import React from "react";
import PropTypes from "prop-types";

class CategoryItem extends React.Component {
  render() {
    const { categoryItem, onProductItemClick, currentFilter } = this.props;
    return (
      <li
        className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
          currentFilter == categoryItem.id ? "active is-checked" : ""
        }`}
        onClick={() => onProductItemClick(categoryItem.id)}
      >
        {categoryItem.name}
      </li>
    );
  }
}

CategoryItem.propTypes = {};

export default CategoryItem;
