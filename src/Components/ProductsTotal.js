import React from 'react'

const ProductsTotal = ({ totalPrice, currency }) => {
    return (
        <h4 className="products-total">
            Total:{totalPrice}
            {currency}
        </h4>
    )
}

export default ProductsTotal
