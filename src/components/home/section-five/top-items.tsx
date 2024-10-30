import { Button } from "@/components/ui/button";
import {  TopItemsDef } from "./definitions";
import { ProductCard } from "./product-card";
import { ProductCard as ProductCardTwo } from "../cards/product-card";


type TopItemsProps = {
  data: TopItemsDef;
};
export const TopItems = ({
  data: {
    ProductCardData,
    ProductCardDataTwo,
    backgroundImage,
    header,
    label,
    title,
    id,
    link
  },
}: TopItemsProps) => {
  return (
    <div className="bg-white mx-5 rounded-md">
      <h1 className="font-bold p-5">{header}</h1>
      <div className="flex border-b-2 m-5 pb-5 gap-4 ">
        <div
          className="flex-1 flex flex-col gap-3 h-52 justify-end rounded-md p-5"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="uppercase font-semibold max-w-60 text-2xl">
            {title}
          </span>
          <p className="text-sm text-gray-500">{label}</p>
          <Button className="w-40">{link}</Button>
        </div>
        <div className="flex flex-wrap gap-5 max-w-2xl">
          {ProductCardData.map((item, idx) => (
            <ProductCard data={item} key={idx} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button variant="outline">Prev</Button>
        <div className="flex gap-3 p-5">
          {ProductCardDataTwo.map((item) => (
            <ProductCardTwo data={item} />
          ))}
        </div>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
};
