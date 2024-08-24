import { BrandsCard } from "./brands-card";
import { BrandsCardDef } from "./definition";

const cardData: BrandsCardDef[] = [
  {
    id: "1",
    label: "Zumac Steel Computer Case",
    description: "And an option to upgrade every three years",
    imageUrl: "/assets/home/section-four/computer-casing.jpg",
  },
  {
    id: "2",
    label: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "Limited time offer. Hurry up",
    imageUrl: "/assets/home/section-four/chair.jpg",
  },
  {
    id: "3",
    label: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    description: "And an option to upgrade every three years",
    imageUrl: "/assets/home/section-four/monitor.jpg",
  },
  {
    id: "4",
    label: "iPed Pro Mini 6 - Powerful l in hand",
    description: "From $19.99/month for 36 months. $280.35 final payment due in month 37",
    imageUrl: "/assets/home/section-four/iPhed.jpg",
  },
];

export function BrandsNewForYou() {
  return (
    <div className="p-5 m-5 bg-white rounded-md">
      <h1 className="font-bold p-3 mb-3">BRAND NEW FOR YOU</h1>
      <div className="flex gap-9 justify-center">
        {cardData.map((item) => (
          <BrandsCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
