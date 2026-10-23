export interface NavigationProps {
    name:string;
    href:string;
}
export const navigation:NavigationProps[] = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "rooms",
    href: "/rooms",
  },
  {
    name: "about",
    href: "#/about",
  },
  {
    name: "contact",
    href: "#/contact",
  },
];