"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface NavigationMenuLinsProps {
  label: string;
  link: string;
  children?: NavigationMenuLinsProps[];
}
interface LinksTree {
  link: NavigationMenuLinsProps;
}

export const NavigationMenuLinks = ({
  link: { label, link, children },
}: LinksTree) => {
  const toUpperCase = (label: string) => {
    return label.charAt(0).toUpperCase() + label.slice(1, label.length);
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Link href={link}>{toUpperCase(label)}</Link>
          </NavigationMenuTrigger>
          {children ? (
            <NavigationMenuContent>
              <NavigationMenuLink>{link}</NavigationMenuLink>
            </NavigationMenuContent>
          ) : null}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
