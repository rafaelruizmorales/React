import * as React from "react";

import Carousel from 'nuka-carousel';

import { useHistory } from 'react-router-dom';

import DOMPurify from "dompurify";

import PriceFormatter from '../../components/PriceFormatter/PriceFormatter'

export default function ProductPage( {match} ) {
  React.useEffect(() => {
    fetchProductData();
  }, []);

  const history = useHistory();

  const [productData, setProductData] = React.useState([]);

  const fetchProductData = async () => {
    const data = await fetch(
      `http://localhost:5000/products/${match.params.id}`
    );

    const product = await data.json();

    console.log(product)

    setProductData(product);
  };

  const redirect = () => {
    history.push('/productGrid')
  }

  if (productData.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <button onClick={redirect}>Back</button>
      <h1>{productData.title}</h1>
      
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (null)}
        renderCenterRightControls={({ nextSlide }) => (null)}
        slideWidth="200px"
        width="200px"
      >
        {productData.media.images.urls.map((image, index) => {
          return (
            <img key={index} alt={productData.media.images.altText} src={image} />
          )
        })}
      </Carousel>

      <PriceFormatter currency={productData.price.currency} amount={productData.price.now} display="before" />

      <p>{productData.displaySpecialOffer}</p>
      
      <p>{productData.additionalServices.includedServices}</p>
      
      <h2>Product Information</h2>      
      <div dangerouslySetInnerHTML={
        {__html: DOMPurify.sanitize(productData.details.productInformation, {USE_PROFILES: {html: true}})}}>
      </div>
      
      <p>Product code: {productData.code}</p>

      <h2>Product Specification</h2>
        {Object.entries(productData.dynamicAttributes).map((attribute) => {
          const attr = attribute[0]
          return (
          `${attr} - ${productData.dynamicAttributes[attr]}`
          )
        })}      
    </div>
  );
}
