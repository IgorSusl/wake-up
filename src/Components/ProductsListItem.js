/* eslint-disable no-unused-vars */
import React from 'react'
import productsArray from './productsArray'

const ProductsListItem = ({
    // id,
    // name,
    // description,
    // price,
    addToTotalPrice,
    currency,
    ratio,
}) => {
    return (
        <div className="product-list">
            {productsArray.map(({ id, name, description, price }) => (
                <div className="products-greed" key={id}>
                    <div className="description-product">
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <div>
                            {price * ratio}
                            {currency}
                        </div>
                        <button onClick={() => addToTotalPrice(price)}>
                            BUY
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsListItem
