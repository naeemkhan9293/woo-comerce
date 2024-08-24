import { Button } from "@/components/ui/button";

export const YourRecentlyViewed = () => {
  return (
    <div className="bg-white m-5 p-5 rounded-md ">
      <div className="flex justify-between">
        <h1 className="font-bold uppercase">Your Recently View</h1>
        <Button variant="ghost">View All</Button>
      </div>
    </div>
  );
};
