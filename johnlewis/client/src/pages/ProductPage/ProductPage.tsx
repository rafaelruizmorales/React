import * as React from "react";

import { useParams } from 'react-router-dom';

import DOMPurify from "dompurify";

import Carousel from 'nuka-carousel';

import PriceFormatter from '../../components/PriceFormatter/PriceFormatter'
import PageHeader from '../../components/PageHeader/PageHeader';
import DynamicAttrinutesTable from '../../components/DynamicAttrinutesTable/DynamicAttrinutesTable'

import '../../styles/productPage.css'

export default function ProductPage() {

  interface media {
    images: images;
  }
  interface images {
    urls: string[];
    altText: string;
  }

  interface price {
    currency: string;
    now: string;
  }
  interface additionalServices {
    includedServices: string;
  }

  interface details {
    productInformation: string;
  }

  interface ProductData {
    title: string;
    media: media;
    price: price;
    displaySpecialOffer: string;
    additionalServices: additionalServices;
    details: details;
    code: string;
    dynamicAttributes: Record<string, string>
  }

  React.useEffect(() => {
    fetchProductData();
  }, []);

  const { id } = useParams<{ id: string }>();

  const [productData, setProductData] = React.useState<ProductData | undefined>(undefined);

  const fetchProductData = async () => {
    const data = await fetch(
      `http://localhost:5000/products/${id}`
    );

    const product = await data.json();

    setProductData(product);
  };

  if (!productData) {
    return <div>Loading...</div>
  }

  return (
    <div>
      
      <PageHeader title={productData.title} backLink={true} />

      <div id="ProductCarousel">
        <Carousel
          renderCenterLeftControls={({ previousSlide }) => (null)}
          renderCenterRightControls={({ nextSlide }) => (null)}
          slideWidth="400px"
          width="400px"
        >
          {productData.media.images.urls.map((image, index) => {
            return (
              <img key={index} alt={productData.media.images.altText} src={image} />
            )
          })}
        </Carousel>
      </div>
      <div className="container">
        <div className="row">
          <h2>
            <PriceFormatter currency={productData.price.currency} amount={productData.price.now} display="before" />
          </h2>
          <p>{productData.displaySpecialOffer}</p>

          <p className="text-green">{productData.additionalServices.includedServices}</p>

          <h3>Product Information</h3>
          <div dangerouslySetInnerHTML={
            { __html: DOMPurify.sanitize(productData.details.productInformation, { USE_PROFILES: { html: true } }) }}>
          </div>

          <p>Product code: {productData.code}</p>

          <h3>Product Specification</h3>
          <table id="dynamicAttributesTable">
            <tbody>
              {Object.entries(productData.dynamicAttributes).map((attribute, index) => {
                const attrKey: string = attribute[0]
                const attrValue: string = productData.dynamicAttributes[attrKey]

                return (
                  <DynamicAttrinutesTable key={index} attrKey={attrKey} attrValue={attrValue} />
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
