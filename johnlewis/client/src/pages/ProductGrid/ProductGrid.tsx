import * as React from 'react';

import { State } from '../../redux/store'

import { useSelector, useDispatch } from 'react-redux'

import { productModel } from '../../redux/products/model'

import { fetchProducts } from '../../redux'

import Product from '../../components/Product/Product'

const ProductGrid: React.FC = () => {
  const dispatch = useDispatch()

  const products = useSelector((store: State) => store.products.products)

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])


  if (products.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
        <h1>{products.categoryTitle} ({products.results})</h1>
        
        
        {products && products.products.map((product: productModel) => {
          return (
            <Product key={product.productId} product={product} />
          )
        })}
          
    </>
  );
}

export default ProductGrid