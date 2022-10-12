import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Navbar = () => {
  const Kategorie = [
    { name: "O mně" },
    { name: "Portfolio" },
    { name: "Kontakt" },
  ];

  const [isMobileMenu, setMobileMenu] = useState(false);

  const ToggleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  return (
    <div className="navbar bg-transparent w-full z-50 overflow-hidden">
      <div className="flex justify-end w-full h-24">
        <div className="links hidden blur-0 z-50 md:flex m-4">
          {Kategorie.map((category) => (
            <li className="pr-14 uppercase animate__animated animate__fadeInLeft monument-black text-white hover:text-slate-200 list-none">
              <a href={`#${category.name.toLowerCase()}`}>{category.name}</a>
            </li>
          ))}
        </div>
        <button
          className={`animate__animated animate__fadeIn md:hidden m-4 ${
            isMobileMenu ? "hidden" : ""
          }`}
          onClick={ToggleMobileMenu}
        >
          <MenuIcon style={{ color: "white" }} fontSize="large" />
        </button>
      </div>
      <div
        className={`navbar-mobile z-20 absolute top-4 left-0 right-0 ${
          isMobileMenu ? "" : "hidden"
        }`}
      >
        <div className="bg-gray-300 h-full m-3 pr-6 drop-shadow-2xl flex justify-evenly items-end flex-col">
          {Kategorie.map((category) => (
            <li className="text-2xl py-20 sm:text-3xl animate__animated animate__fadeInLeft monument-black uppercase list-none">
              <a href={`#${category.name}`}>
                <ArrowRightAltIcon fontSize="large" />
                {category.name}
              </a>
            </li>
          ))}
        </div>
        <button
          className="absolute top-4 right-4 animate__animated animate__fadeIn"
          onClick={ToggleMobileMenu}
        >
          <CloseIcon fontSize="large" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
