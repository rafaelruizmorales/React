interface price {
  currency: string;
  now: string;
}

export interface productModel {
  productId: number;
  title: string;
  image: string;
  price: price;
}

export interface products {
  products: productModel[]
}