import { navigation,  type NavigationProps } from "@/lib/navigation"
interface NavbarProps {
  isClicked:boolean;
  toggleNavClick:()=>void;
}
const Navbar = ({isClicked,toggleNavClick}:NavbarProps) => {
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
              className="text-200 font-500 mb-4 capitalize pl-4"
            >
              <a
                href={item.href}
                className="hover:text-primary transition-colors duration-300"
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