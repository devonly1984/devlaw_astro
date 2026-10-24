import { navigation,  type NavigationProps } from "@/lib/navigation"
import { useEffect, useState } from "react";
interface NavbarProps {
  isClicked:boolean;
  toggleNavClick:()=>void;
}
const Navbar = ({isClicked,toggleNavClick}:NavbarProps) => {
  const [active, setActive] = useState("")
  useEffect(()=>{
    setActive(window.location.pathname);
  },[])
  const handleNavClick = (href:string)=>{
    setActive(href);
    toggleNavClick();

  }
  return (
    <>
      {/**Mobile Navigation */}
      <nav
        className={`fixed top-0 left-0 flex h-screen w-full items-center justify-start transition-all duration-500 lg:hidden ${isClicked ? "translate-x-0" : "translate-x-[-190.25rem]"}`}
      >
        <ul className="border-muted bg-background h-full w-[70%] border-r pt-36">
          {navigation.map((item: NavigationProps) => (
            <li
              key={item.name}
              className={`text-200 font-500 mb-4 capitalize pl-4 `}
            >
              <a
                href={item.href}
                className={`hover:text-primary text-foreground transition-colors duration-300 ${active === item.href ? "text-primary" : ""}`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/**Desktop Navigation */}
      <nav className="hidden lg:inline-block">
        <ul className="md:flex md:gap-6 capitalize">
          {navigation.map((item: NavigationProps) => (
            <li
              key={item.name}
              className={`text-100 font-500 mb-4 capitalize pl-4 `}
            >
              <a
                href={item.href}
                className={` transition-colors duration-300 ${active === item.href ? "bg-primary rounded-md px-2 py-1 text-white" : ""}`}
                onClick={() => setActive(item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
export default Navbar