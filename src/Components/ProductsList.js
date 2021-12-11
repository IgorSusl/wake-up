import React, { useState } from 'react'
import ProductsListItem from './ProductsListItem'
import ProductsTotal from './ProductsTotal'

const ProductsList = () => {
    const [currency, setCurrency] = useState('EUR')
    const [ratio, setRatio] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0)

    const addToTotalPrice = (price) => {
        setTotalPrice(totalPrice + price * ratio)
    }

    return (
        <>
            <div className="main">
                <h1 className="namePage">OUR SHOP PAGE</h1>
            </div>
            <div className="button-place">
                <button
                    onClick={() => {
                        setCurrency('EUR')
                        setRatio(1)
                    }}
                >
                    EUR
                </button>
                <button
                    onClick={() => {
                        setCurrency('USD')
                        setRatio(1.15)
                    }}
                >
                    USD
                </button>
                <button
                    onClick={() => {
                        setCurrency('UAH')
                        setRatio(1.3)
                    }}
                >
                    UAH
                </button>
            </div>
            <ProductsListItem
                addToTotalPrice={addToTotalPrice}
                currency={currency}
                ratio={ratio}
            />
            <ProductsTotal totalPrice={totalPrice} currency={currency} />
        </>
    )
}

export default ProductsList
