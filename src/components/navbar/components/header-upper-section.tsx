import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const HeaderUpperSection = () => {
  return (
    <div className="flex justify-between px-4 py-2 items-center ">
      <div className="flex gap-4">
        <span>Hotline 24/7</span>
        <span>(025) 3886 25 16</span>
      </div>
      <div className="flex items-center gap-3 ">
        <span className="text-nowrap">Order Tracking</span>
        {/* currency selector */}
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="USD" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
            <SelectItem value="PKR">PKR</SelectItem>
          </SelectContent>
        </Select>
        {/* language selector */}
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Lang" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Urdu">Urdu</SelectItem>
            <SelectItem value="Arabic">Arabic</SelectItem>
            <SelectItem value="Eng">Eng</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
