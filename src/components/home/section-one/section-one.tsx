import Image from "next/image";
import { Button } from "@/components/ui/button";

const categories = [
  "SALE 40% OFF",
  "Laptops",
  "PC & Computers",
  "Cell Phones",
  "Tablets",
  "Gaming & VR",
  "Networking",
  "Cameras",
  "Sounds",
  "Office",
  "Storage, USB",
  "Accessories",
  "Clearance",
];

export function HomeSectionOne() {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 gap-4 rounded-sm max-h-screen h-[500px] m-5">
        {/* Hero one section menu */}
        <div className="bg-white shadow-sm row-span-12 col-span-3 rounded-xl flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-y-2">
            {categories.map((item) => (
              <li className="cursor-pointer" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* middle section start */}

        {/* main image section */}
        <div className="relative col-span-6 row-span-8 rounded-lg">
          <Image
            src="/assets/home/section-one/headphone.jpg"
            fill
            alt="headphone"
            className="object-cover -z-10 rounded-xl"
          />
          <div className="absolute bottom-11 flex w-full justify-between px-14">
            <Button variant="outline">Buy Now</Button>
            <Button variant="outline">prev/next</Button>
          </div>
        </div>

        {/* bottom images section */}
        <div className="relative row-span-4 col-span-3 col-start-4">
          <Image
            src="/assets/home/section-one/play-station.jpg"
            alt="play-station"
            className="object-cover -z-10 rounded-lg"
            fill
          />
          <Button className="absolute bottom-6 mx-6 text-white" variant="link">
            DISCOVER NOW
          </Button>
        </div>
        <div className="relative  row-span-4 col-span-3 col-start-7 ">
          <Image
            src="/assets/home/section-one/keyboard.jpg"
            alt="play-station"
            className="object-cover rounded-lg"
            fill
          />
          <Button className="absolute bottom-6 mx-6 text-white" variant="link">
            DISCOVER NOW
          </Button>
        </div>

        {/* middle section end */}

        {/* side images section */}
        <div className="relative col-span-3 row-span-6 row-start-1 col-start-10">
          <Image
            src="/assets/home/section-one/smart-watch.jpg"
            fill
            alt="smart-watch"
            className="object-cover -z-10 rounded-lg"
          />
          <Button className="absolute bottom-6 mx-6 right-0">Shop Now</Button>
        </div>
        <div className="relative col-span-3 row-span-6 col-start-10 row-start-7">
          <Image
            src="/assets/home/section-one/camera.jpg"
            fill
            alt="smart-watch"
            className="object-cover -z-10 rounded-lg"
          />
          <Button className="absolute bottom-6 mx-6 right-0">Shop Now</Button>
        </div>
      </div>

      <div className="flex gap-3 mx-5">
        <div className="bg-white rounded-lg flex-1 p-4 shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-bold">FEATURED BRANDS</h1>
            <Button variant="link">View All</Button>
          </div>
          <div className="flex gap-10 flex-wrap p-3 items-center justify-center">
            <Image
              src="/assets/home/section-one/logos/logo1.png.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Image
              src="/assets/home/section-one/logos/logo2.png.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Image
              src="/assets/home/section-one/logos/logo3.png.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Image
              src="/assets/home/section-one/logos/logo4.png.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Image
              src="/assets/home/section-one/logos/logo5.png.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Image
              src="/assets/home/section-one/logos/logo6.png.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Image
              src="/assets/home/section-one/logos/logo7.png.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Image
              src="/assets/home/section-one/logos/logo8.png.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Image
              src="/assets/home/section-one/logos/logo9.png.png"
              width={70}
              height={70}
              alt="logo"
            />
            <Image
              src="/assets/home/section-one/logos/logo10.png.png"
              width={70}
              height={70}
              alt="logo"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg flex-1 p-4 shadow-sm">
          <div className="flex justify-between">
            <h1 className="font-bold">TOP CATEGORIES</h1>
            <Button variant="link">View All</Button>
          </div>
          <div className="p-3 flex gap-10">
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/assets/home/section-one/top-categories/prod1.png.png"
                width={160}
                height={60}
                alt="laptop"
              />
              <h3 className="font-semibold">Pc Gaming</h3>
            </div>
            <div>
              <Image
                src="/assets/home/section-one/top-categories/prod2.png.png"
                width={160}
                height={60}
                alt="laptop"
              />
              <h3>HeadPhones</h3>
            </div>
            <div>
              <Image
                src="/assets/home/section-one/top-categories/prod3.png.png"
                width={160}
                height={60}
                alt="laptop"
              />
              <h3>Monitors</h3>
            </div>
            <div>
              <Image
                src="/assets/home/section-one/top-categories/prod4.png.png"
                width={160}
                height={60}
                alt="laptop"
              />
              <h3>Laptops</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
