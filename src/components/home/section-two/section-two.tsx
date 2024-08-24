"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./count-down-timer";
import { Progress } from "@/components/ui/progress";

export const HomeSectionTwo = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1);
  
  return (
    <div className="flex px-5 gap-4">
      <div className="flex-1">
        <div>
          {/* header */}
          <div className="flex bg-[#ea580c] text-white justify-between items-center rounded-md py-4 px-12">
            <h1 className="font-semibold">Deals of the day</h1>
            <Button variant="link" className="text-white">
              View All
            </Button>
          </div>
        </div>
        {/* hero section */}
        <div className="bg-white flex  items-center justify-around py-9 flex-wrap">
          {/* left */}
          <div className="flex flex-col items-center gap-6 relative mx-5">
            <div className="h-12 w-6 relative rounded-lg ">
              <Image
                fill
                src="/assets/home/section-two/phone.jpg"
                alt="phone"
                className="rounded-sm object-cover"
              />
            </div>
            <div className="h-12 w-6 relative rounded-lg ">
              <Image
                fill
                src="/assets/home/section-two/game-pad-one.jpg"
                alt="phone"
                className="rounded-sm  object-cover"
              />
            </div>
            <div className="h-12 w-6 relative rounded-lg ">
              <Image
                fill
                src="/assets/home/section-one/play-station.jpg"
                alt="phone"
                className="rounded-sm object-cover"
              />
            </div>
            <div className="h-12 w-6 relative rounded-lg ">
              <Image
                fill
                src="/assets/home/section-two/game-pad-two.jpg"
                alt="phone"
                className="rounded-sm object-cover"
              />
            </div>
          </div>

          <div className="relative rounded-lg h-[60vh]  w-screen  max-w-[450px]">
            <Image
              fill
              src="/assets/home/section-two/game-pad-two.jpg"
              alt="phone"
              className="rounded-sm object-cover"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="font-semibold">
              Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone
            </h1>
            <div className="flex mb-4">
              <p className="text-xl font-semibold text-destructive">#559.00</p>
              <p className="line-through relative top-1 right-1 text-gray-500">
                $759.00
              </p>
            </div>
            <ul className="list-disc my-4">
              <li>
                Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
              </li>
              <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
              <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>
            <div className="flex gap-2 my-4">
              <span className="block text-green-800 bg-green-100 p-2 rounded-md">
                FREE SHIPPING
              </span>
              <span className="block text-destructive bg-red-100 p-2 rounded-md">
                FREE GIFT
              </span>
            </div>
            <div className="border-b-2 border-gray-300 my-4">
              <CountdownTimer targetDate={targetDate} />
            </div>
            <div className="my-4">
              <Progress value={26} className="bg-gray-300" />
              <span className="block text-gray-500">
                Sold: <p className="font-semibold inline text-black">26/75</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col gap-3">
        <div className="relative h-48 w-72">
          <Image
            src="/assets/home/section-two/game-pad-one.jpg"
            alt="game-pad"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-48 w-72">
          <Image
            src="/assets/home/section-two/game-pad-two.jpg"
            alt="game-pad"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-48 w-72">
          <Image
            src="/assets/home/section-two/phone.jpg"
            alt="game-pad"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
