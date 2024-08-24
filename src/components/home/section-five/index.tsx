import { CardsData } from "../cards/definitions";
import { ProductCardDef, TopItemsDef } from "./definitions";
import { TopItems } from "./top-items";

const ProductCardDataSmartphones: ProductCardDef[] = [
  {
    id: "1",
    imageUrl: "/assets/home/home-three/samrt-phone.jpg",
    label: "IPhone(IOS)",
    numberOfItems: "74",
  },
  {
    id: "2",
    imageUrl: "/assets/home/home-three/smart-phone.jpg",
    label: "Android",
    numberOfItems: "35",
  },
  {
    id: "3",
    imageUrl: "/assets/home/home-three/samrt-phone.jpg",
    label: "5G Support",
    numberOfItems: "12",
  },
  {
    id: "4",
    imageUrl: "/assets/home/home-three/samrt-phone.jpg",
    label: "Gaming",
    numberOfItems: "9",
  },
  {
    id: "4",
    imageUrl: "/assets/home/home-three/samrt-phone.jpg",
    label: "Xiaomi",
    numberOfItems: "52",
  },
  {
    id: "4",
    imageUrl: "/assets/home/home-three/samrt-phone.jpg",
    label: "Accessories",
    numberOfItems: "29",
  },
];

const ProductCardDataTwoSmartphones: CardsData[] = [
  {
    id: "1",
    imgUrl: "/assets/home/home-three/samrt-phone.jpg",
    label: "SROK Smart Phone 128GB, Oled Retina",
    numbersOfItems: "152",
    price: "859",
    discount: "199",
    freeShipping: true,
    images: ["/assets/home/home-three/samrt-phone.jpg", ""],
    inStock: true,
  },
  {
    id: "2",
    imgUrl: "/assets/home/home-three/smart-phone.jpg",
    label: "aPod Pro Tablet 2023 LTE + Wifi, GPS Cellular 12.9 Inch,512GB",
    price: "1200.00",
    discount: "99",
    inStock: true,
    numbersOfItems: 0,
    shippingCost: "2.88",
  },
  {
    id: "3",
    imgUrl: "/assets/home/section-two/phone.jpg",
    label: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: "1200.00",
    images: [
      "/assets/home/home-three/samrt-phone.jpg",
      "/assets/home/home-three/smart-phone.jpg",
      "/assets/home/section-two/phone.jpg",
    ],
    inStock: true,
    numbersOfItems: 5,
    freeShipping: true,
    freeGifts: true,
  },
  {
    id: "4",
    imgUrl: "/assets/home/section-four/iPhed.jpg",
    label: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: "1600.00",
    discount: "599.00",
    numbersOfItems: 5,
    freeShipping: true,
    contact: true,
  },
  {
    id: "5",
    imgUrl: "/assets/home/section-four/iPhed.jpg",
    label: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: "1700.00",
    numbersOfItems: 8,
    freeShipping: true,
    contact: true,
    images: [
      "/assets/home/home-three/samrt-phone.jpg",
      "/assets/home/home-three/smart-phone.jpg",
      "/assets/home/section-two/phone.jpg",
    ],
  },
];

const ProductCardDataSmartPc: ProductCardDef[] = [
  {
    id: "1",
    imageUrl: "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
    label: "Macbook",
    numberOfItems: "74",
  },
  {
    id: "2",
    imageUrl: "/assets/home/section-four/laptop-and-smartphones/pc.jpg",
    label: "Gaming Pc",
    numberOfItems: "35",
  },
  {
    id: "3",
    imageUrl: "/assets/home/section-four/laptop-and-smartphones/laptops.jpg",
    label: "Laptop Pc",
    numberOfItems: "12",
  },
  {
    id: "4",
    imageUrl: "/assets/home/section-four/laptop-and-smartphones/laptops.jpg",
    label: 'Laptop 15"',
    numberOfItems: "9",
  },
  {
    id: "4",
    imageUrl: "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
    label: "M1 2023",
    numberOfItems: "52",
  },
  {
    id: "4",
    imageUrl: "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
    label: "SecondHand",
    numberOfItems: "29",
  },
];

const ProductCardDataTwoSmartPc: CardsData[] = [
  {
    id: "1",
    imgUrl: "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
    label: "Pineapple Macbook Pro 2022 M1 / 512 GB",
    numbersOfItems: "152",
    price: "859",
    freeShipping: true,
    images: ["/assets/home/home-three/samrt-phone.jpg", ""],
    inStock: true,
  },
  {
    id: "2",
    imgUrl: "/assets/home/home-three/smart-phone.jpg",
    label: "C&O Bluetooth Speaker",
    price: "1200.00",
    inStock: true,
    numbersOfItems: 0,
    shippingCost: "2.88",
  },
  {
    id: "3",
    imgUrl: "/assets/home/section-two/phone.jpg",
    label: "Gigaby Custome Case, i7/ 16GB / SSD 256GB",
    price: "1200.00",
    images: [
      "/assets/home/home-three/samrt-phone.jpg",
      "/assets/home/home-three/smart-phone.jpg",
      "/assets/home/section-two/phone.jpg",
    ],
    inStock: true,
    numbersOfItems: 5,
    freeShipping: true,
    freeGifts: true,
  },
  {
    id: "4",
    imgUrl: "/assets/home/section-four/laptop-and-smartphones/tablet-1.jpg",
    label: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: "1600.00",
    discount: "599.00",
    numbersOfItems: 5,
    freeShipping: true,
    contact: true,
  },
  {
    id: "5",
    imgUrl: "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
    label: "aMoc All-in-one Computer M1",
    price: "1700.00",
    numbersOfItems: 8,
    freeShipping: true,
    contact: true,
    images: [
      "/assets/home/home-three/samrt-phone.jpg",
      "/assets/home/home-three/smart-phone.jpg",
      "/assets/home/section-two/phone.jpg",
    ],
  },
];

const TopItemsArr: TopItemsDef[] = [
  {
    id: "1",
    backgroundImage: "/assets/home/home-three/smart-phone.jpg",
    header: "TOP CELLPHONES AND TABLETS",
    ProductCardData: ProductCardDataSmartphones,
    ProductCardDataTwo: ProductCardDataTwoSmartphones,
    label: "Rise to the challenge",
    title: "redmi note 12 Pro+ 5g",
    link: "shop now",
  },
  {
    id: "2",
    backgroundImage: "/assets/home/section-four/laptopFlyer.png",
    header: "TOP CELLPHONES AND TABLETS",
    ProductCardData: ProductCardDataSmartPc,
    ProductCardDataTwo: ProductCardDataTwoSmartPc,
    label: "by M2",
    title: "Mobok 2 superchard",
    link: "Start from $1,199 ",
  },
];

export function HomeSectionFive() {
  return (
    <>
      {TopItemsArr.map((item) => (
        <TopItems data={item} key={item.id} />
      ))}
    </>
  );
}
