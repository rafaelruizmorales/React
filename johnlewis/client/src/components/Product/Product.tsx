import * as React from 'react'

import { productModel } from '../../redux/products/model'

import { Link } from 'react-router-dom'

import PriceFormatter from '../PriceFormatter/PriceFormatter'

const Product: React.FC<{ product: productModel }> = ({ product }) => {

  return (
    <div className="col-lg-3 d-flex align-items-stretch">
      <div className="card">
        <Link to={`/productPage/${product.productId}`}>

          <img className="card-img-top img-fluid" alt={product.title} src={product.image} />
          <h4 className="card-title">{product.title}</h4>
          <p className="card-text">
            <PriceFormatter currency={product.price.currency} amount={product.price.now} display="before" />
            </p>
        </Link>
      </div>
    </div>
  )
}

export default Product;
