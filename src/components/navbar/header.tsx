import { HeaderUpperSection } from "./components/header-upper-section";
import { HeaderLowerSection } from "./components/header-lower-section";
import { HeaderSearch } from "./components/header-search";

export function Header() {
  return (
    <div className="flex flex-col bg-white rounded-sm">
      <div className="shadow-sm rounded-sm ">
        {/* Hotline contact language and currency control */}
        <HeaderUpperSection />
        {/* Header navigation and user registration etc */}
        <HeaderLowerSection />
        {/* Header search */}
      </div>
      <HeaderSearch />
    </div>
  );
}
