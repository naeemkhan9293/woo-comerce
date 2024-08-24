import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return ( 
    <div className="flex flex-col items-center justify-center h-full relative ">
      <h1 className="font-bold text-gray-400 text-[12rem]">404</h1>
      <span className="font-semibold text-4xl absolute bottom-11">Page Not Found</span>
      <Link href="/" className="bg-orange-600 text-white p-2 rounded-md">Home Page</Link>
    </div>
  );
}
