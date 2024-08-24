import { Card } from "./card";
import { CardDefs } from "./definitions";

const cardData: CardDefs[] = [
  {
    header: "Audios &  cameras",
    headerImage: "/assets/home/section-four/laptop-and-smartphones/mic.jpg",
    accessoriesArr: [
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
    ],
  },
  {
    header: "Audios &  cameras",
    headerImage: "/assets/home/section-four/laptop-and-smartphones/mic.jpg",
    accessoriesArr: [
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
    ],
  },
  {
    header: "Audios &  cameras",
    headerImage: "/assets/home/section-four/laptop-and-smartphones/mic.jpg",
    accessoriesArr: [
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
      {
        imageUrl:
          "/assets/home/section-four/laptop-and-smartphones/macbook-1.jpg",
        numberOfItems: "74",
        title: "Microphone",
      },
    ],
  },
];

export const HomeSectionSix = () => {
  return (
    <div className="m-5 flex gap-3">
      {cardData.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
};
