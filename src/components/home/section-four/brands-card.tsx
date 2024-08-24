import Image from "next/image";
import { BrandsCardDef } from "./definition";
import { Button } from "@/components/ui/button";

type BrandsCardProps = {
  data: BrandsCardDef;
};

export function BrandsCard({
  data: { imageUrl,  description, label },
}: BrandsCardProps) {
  return (
    <div className="w-72 flex flex-col gap-3">
      <div className="relative w-full h-60">
        <Image src={imageUrl} fill alt="brands-images" className="object-cover rounded-sm" />
      </div>
      <h2 className="font-semibold">{label}</h2>
      <p className="text-gray-500">{description}</p>
      <Button variant="ghost" className="border-2 border-green-500 text-green-500 w-32 ">SHOP NOW</Button>
    </div>
  );
}
