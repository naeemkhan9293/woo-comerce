"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";

export const HeaderSearch = () => {
  return (
    <div className="bg-orange-600 py-3 rounded-md flex items-center px-4 gap-7">
      <div className="flex bg-white w-1/3   items-center rounded-full px-4">
        <Select>
          <SelectTrigger className="w-[200px] border-none shadow-none outline-none">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="search"
          placeholder="Search anything"
          className="shadow-none border-none outline-none"
        />
        <FaSearch size={40} className="cursor-pointer" />
      </div>
      <div className="text-white flex justify-between flex-1 ml-24 pr-6">
        <span>FREE SHIPPING OVER $199</span>
        <span>30 DAYS MONEY BACK</span>
        <span>100% SECURE PAYMENT</span>
      </div>
    </div>
  );
};
