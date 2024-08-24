import { Button } from "@/components/ui/button";
import { CardDefs } from "./definitions";
import Image from "next/image";

type CardProps = {
  data: CardDefs;
};

export const Card = ({
  data: { headerImage, header, accessoriesArr },
}: CardProps) => {
  return (
    <div className="bg-white rounded-md px-9 py-5">
      <div className="flex justify-between">
        <h1 className="font-bold">{header}</h1>
        <Button variant="ghost">View All</Button>
      </div>
      <div className="relative h-48 ">
        <Image
          src={headerImage}
          alt={header}
          fill
          className="w-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-wrap gap-8 gap-x-11 justify-center border-t border-gray-300 mt-8 pt-8">
        {accessoriesArr.map((item, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="relative h-28 w-28 ">
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="rounded-full"
              />
            </div>
            <h2 className="font-bold">{item.title}</h2>
            <span className="text-sm text-gray-500">{item.numberOfItems} Items</span>
          </div>
        ))}
      </div>
    </div>
  );
};
