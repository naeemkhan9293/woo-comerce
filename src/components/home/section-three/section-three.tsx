import { Button } from "../../ui/button";
import { CardsData } from "../cards/definitions";
import { ProductCard } from "../cards/product-card";

const cardsData: CardsData[] = [
  {
    id: "1",
    numbersOfItems: 152,
    label: "BOSO 2 Wireless On EarHeadphone",
    price: "359",
    freeShipping: true,
    freeGifts: true,
    inStock: true,
    imgUrl: "/assets/home/home-three/head-phone.jpg",
    images: [
      "/assets/home/home-three/headphones.jpg",
      "/assets/home/home-three/head-phone.jpg",
    ],
  },
  {
    id: "2",
    numbersOfItems: 152,
    label: "OPod Pro 12.9 Inch M1 2023, 64GB + Wifi, GPS",
    price: "759",
    discount: "199",
    freeShipping: true,
    inStock: true,
    imgUrl: "/assets/home/home-three/samrt-phone.jpg",
  },
  {
    id: "3",
    numbersOfItems: 8,
    label: "uLosk Mini case mini robot hand",
    price: "2119",
    discount: "59",
    inStock: false,
    freeShipping: true,
    imgUrl: "/assets/home/home-three/robot-hand.jpg",
  },
  {
    id: "4",
    numbersOfItems: 0,
    label:
      "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    price: "1259",
    inStock: false,
    shippingCost: 2.98,
    imgUrl: "/assets/home/home-three/watch.jpg",
    preOrder: true,
  },
  {
    id: "5",
    numbersOfItems: 9,
    label: "iSmart 24V Charger",
    price: "1259",
    discount: "59",
    inStock: false,
    shippingCost: 3.98,
    imgUrl: "/assets/home/home-three/adopter.jpg",
    contact: true,
  },
];

export const HomeSectionThree = () => {
  return (
    <div className="bg-white rounded-lg mx-5 p-3">
      <header>
        <ul className="flex gap-5">
          <li className="font-bold">BEST SELLER</li>
          <li>NEW IN</li>
          <li>POPULAR</li>
        </ul>
      </header>
      <div className="flex justify-between items-center ">
        <Button variant="outline">Prev</Button>
        <div className="flex-1 flex items-start  justify-center gap-2 w-64">
          {cardsData.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
};
