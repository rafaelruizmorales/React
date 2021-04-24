import * as React from 'react';

import { State } from '../../redux/store'

import { useSelector, useDispatch } from 'react-redux'

import { productModel } from '../../redux/products/model'

import { fetchProducts } from '../../redux'

import Product from '../../components/Product/Product'
import PageHeader from '../../components/PageHeader/PageHeader';

import '../../styles/productGrid.css'

const ProductGrid: React.FC = () => {
  const dispatch = useDispatch()

  const products = useSelector((store: State) => store.products.products)

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])


  if (products.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <>
      <PageHeader title={`${products.categoryTitle} (${products.results})`} />

      <div className="grid container">
        <div className="row">
            {products && products.products.map((product: productModel) => {
              return (
                <Product key={product.productId} product={product} />
              )
            })}
      </div>
    </div>
          
    </>
  );
}

export default ProductGrid