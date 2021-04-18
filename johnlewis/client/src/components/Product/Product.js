import * as React from 'react'

import { Link } from 'react-router-dom'

import PriceFormatter from '../PriceFormatter/PriceFormatter'

const Product = ({ product }) => {

  return (
    <div>
      <Link key={product.productId} to={`/productPage/${product.productId}`}>

        <img alt={product.title} src={product.image} width='200' />
        <p>{product.title}</p>
        <PriceFormatter currency={product.price.currency} amount={product.price.now} display="before" />

      </Link>

    </div>
  )
}

export default Product;

