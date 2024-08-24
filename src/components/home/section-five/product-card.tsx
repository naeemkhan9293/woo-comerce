import Image from "next/image";
import { ProductCardDef } from "./definitions";

type ProductCardProps = {
  data: ProductCardDef;
};

export const ProductCard = ({
  data: { imageUrl, label, numberOfItems },
}: ProductCardProps) => {
  return (
    <div className="flex items-center h-fit gap-8 w-52 justify-between">
      <div>
        <h1 className="font-bold">{label}</h1>
        <p className="text-sm text-gray-800">{numberOfItems} Items</p>
      </div>
      <div className="relative w-16 h-16">
        <Image
          src={imageUrl}
          alt={label}
          fill
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};
