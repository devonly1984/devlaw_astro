import { AlignLeft, X } from "lucide-react";
import { ModeToggle } from "../mode/ModeToggle";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";


import Login from "./Login";
import { Show } from "@clerk/astro/react";
import Dashboard from "../Dashboard";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = ()=>{
      const scroll = window.scrollY;
      if (scroll > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }
    window.addEventListener('scroll',handleScroll);
    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  const getTextColor = ()=>{
    return scrolling ? "text-foreground" : "text-white";
  }
  const toggleNavClick=()=>{
    setIsClicked(!isClicked);

  }
  return (
    <header
      className={` ${scrolling ? "bg-background animate-in duration-500" : "animate-out duration-500"} fixed top-0 z-500 w-full ${getTextColor()}`}
    >
      <div className="container flex items-center py-5 justify-between">
        {/**Logo */}
        <a
          href="/"
          className={` ${isClicked ? "text-black" : ""} text-200 font-800 z-10 inline-block`}
        >
          <span className="text-primary">StayLite</span>Hotel
        </a>
        {/**Navbar */}
        <Navbar isClicked={isClicked} toggleNavClick={toggleNavClick} />
        <div className="flex items-center justify-start gap-4">
          <Login />
          <Show when="signed-in">
            <Dashboard />
          </Show>
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