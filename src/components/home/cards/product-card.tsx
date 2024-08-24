import Image from "next/image";
import { CardsData } from "./definitions";

type CardsProps = {
  data: CardsData;
};

export const ProductCard = ({
  data: {
    id,
    inStock,
    imgUrl,
    label,
    numbersOfItems,
    contact,
    price,
    discount,
    freeGifts,
    freeShipping,
    images,
    preOrder,
    shippingCost,
  },
}: CardsProps) => {
  return (
    <div className="rounded-md w-60 flex flex-col gap-2 relative">
      {discount && (
        <div className="absolute z-10 bg-orange-600 text-white rounded-sm p-2  flex flex-col">
          <span className="text-sm">SAVE</span>
          <span>${discount}</span>
        </div>
      )}
      <div className="relative w-60 h-60">
        <Image
          src={imgUrl}
          alt="product-img"
          fill
          className="rounded-md object-cover"
        />
      </div>
      {numbersOfItems !== 0 && (
        <p className="text-center text-gray-600">({numbersOfItems})</p>
      )}
      <h2 className="font-semibold text-wrap">{label}</h2>
      <div>
        {discount ? (
          <div className="relative">
            <span className="font-semibold text-red-500">
              $ {parseInt(price) - parseInt(discount)}
            </span>
            <span className="text-gray-600 font-semibold relative right-1 text-sm line-through">
              ${price}
            </span>
          </div>
        ) : (
          <span className="font-semibold">${parseInt(price)}</span>
        )}
      </div>
      <div className="flex justify-between">
        {freeShipping && (
          <span className="bg-green-100 text-green-800 text-2sm font-semibold p-1 rounded-sm px-4 ">
            FREE SHIPPING
          </span>
        )}

        {freeGifts && (
          <span className="bg-red-100 text-red-800 text-2sm font-semibold  p-1 rounded-sm px-4">
            FREE GIFTS
          </span>
        )}
      </div>
      {shippingCost && (
        <span className="bg-gray-100 rounded inline w-fit p-1 text-2sm font-semibold">
          ${shippingCost} SHIPPING
        </span>
      )}
      {contact && <span className="text-sm">Contact</span>}
      {preOrder && <span className="text-sm">PRE - ORDER</span>}
      <div>
        {inStock ? (
          <span className="text-sm">✅ In stock</span>
        ) : (
          <span className="text-sm">❌ Out of stock</span>
        )}
      </div>

      <div className="flex gap-2">
        {images?.map((img) => (
          <Image
            src={img}
            alt="product-img"
            width={50}
            height={50}
            key={img}
            className="rounded border object-cover"
          />
        ))}
      </div>
    </div>
  );
};
