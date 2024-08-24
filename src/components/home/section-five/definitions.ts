import { CardsData } from "../cards/definitions";

export interface ProductCardDef {
  id: string;
  label: string;
  imageUrl: string;
  numberOfItems: string;
}

export interface TopItemsDef{
    id:string
    header:string
    title:string
    label:string
    backgroundImage:string
    ProductCardData:ProductCardDef[]
    ProductCardDataTwo:CardsData[]
    link:string
}