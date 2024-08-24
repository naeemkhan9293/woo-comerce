import { HomeSectionFive } from "@/components/home/section-five";
import { HomeSectionFour } from "@/components/home/section-four";
import { HomeSectionOne } from "@/components/home/section-one/section-one";
import { YourRecentlyViewed } from "@/components/home/section-seven";
import { HomeSectionSix } from "@/components/home/section-six";
import { HomeSectionThree } from "@/components/home/section-three/section-three";
import { HomeSectionTwo } from "@/components/home/section-two/section-two";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <HomeSectionOne />
      <HomeSectionTwo />
      {/* trial notification */}
      <div className="flex items-center justify-center gap-1">
        <p>🌟</p>
        <p>Member get</p>
        <p className="text-orange-600">FREE SHIPPING*</p>
        <p>with no order minimum!.</p>
        <p>Restriction apply</p>
        <p className="underline">free 30-days trial!</p>
      </div>
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix />
      <YourRecentlyViewed />
    </main>
  );
}
