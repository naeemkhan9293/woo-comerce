import { RiShoppingBag3Fill } from "react-icons/ri";
import { NavigationMenuLinks } from "./navigation-menu-links";
import { CiHeart } from "react-icons/ci";
import { UserMenu } from "./user-menu";
import { FaDollarSign } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";

type NavLinksTypes = {
  link: string;
  label: string;
  children?: NavLinksTypes[];
};

const navLinks: NavLinksTypes[] = [
  { label: "home", link: "/" },
  { label: "pages", link: "/pages" },
  { label: "products", link: "products" },
  { label: "contact", link: "/contact" },
];

export const HeaderLowerSection = () => {
  return (
    <div className="flex justify-between px-5">
      {/* logon and navigation */}
      <div className="flex items-center gap-7">
        {/* logo */}
        <div className="flex items-center">
          <RiShoppingBag3Fill size={40} className="text-orange-500" />
          <span className="text-2xl">
            <strong>Woo</strong>Mart
          </span>
        </div>

        {/* nav-links */}
        <div className="flex gap-1">
          {navLinks.map((item, index) => (
            <NavigationMenuLinks link={item} key={index} />
          ))}
        </div>
      </div>

      {/* favorite,  user and cart container */}
      <div className="flex gap-6 items-center">
        {/* favorite */}
        <div className="bg-orange-600 rounded-full p-1">
          <CiHeart size={25} className="text-white" />
        </div>

        {/* user */}
        <UserMenu />

        {/* cart */}
        <div className="flex items-center justify-center gap-3">
          <span className="relative top-0 block">
            <IoMdCart size={35} />
            <p className="absolute w-[20px] h-[20px] text-center rounded-full text-sm  text-white bg-orange-600 top-4 left-4">
              5
            </p>
          </span>
          <div>
            <p className="text-gray-500">cart</p>
            <span className="flex items-center">
              <FaDollarSign />
              <p className="font-semibold">1,03</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
