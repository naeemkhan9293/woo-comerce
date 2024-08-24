export interface CardsData {
    id: string;
    numbersOfItems: string | number;
    inStock?: boolean;
    label: string;
    price: string;
    freeShipping?: boolean;
    freeGifts?: boolean;
    discount?: string;
    imgUrl: string;
    images?: string[];
    shippingCost?: number | string;
    contact?: boolean;
    preOrder?: boolean;
  }