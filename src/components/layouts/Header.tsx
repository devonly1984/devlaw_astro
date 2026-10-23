import { AlignLeft, X } from "lucide-react";
import { ModeToggle } from "../mode/ModeToggle";
import Navbar from "./Navbar";
import { useState } from "react";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)
  const toggleNavClick=()=>{
    setIsClicked(!isClicked);

  }
  return (
    <header className="fixed top-0 z-500 w-full ">
      <div className="container flex items-center py-5 justify-between">
        {/**Logo */}
        <a href="/" className="text-200 font-800 z-10 inline-block">
          <span className="text-primary">StayLite</span>Hotel
        </a>
        {/**Navbar */}
        <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick} />
        <div className="flex items-center justify-start gap-4">
          <button>Login</button>
          {/**Mode Toggle */}
          <ModeToggle />
          {/**Menu Buttons */}
          <div className="inline-block lg:hidden" onClick={toggleNavClick}>
            {isClicked ? (
              <X
                name="close menu"
                cursor={"pointer"}
                size={26}
                className="translate-y-1 md:translate-y-0"
              />
            ) : (
              <AlignLeft
                name="open menu"
                cursor={"pointer"}
                size={26}
                className="translate-y-1 md:translate-y-0"
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header