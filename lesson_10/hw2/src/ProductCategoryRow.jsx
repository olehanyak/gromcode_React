import React from "react";

const ProductCategoryRow = ({ category }) => {
    // const { category } = this.props.category;
    return (
        <tr>
            <th colSpan="2">{category}</th>
        </tr>
    );
};

export default ProductCategoryRow;
