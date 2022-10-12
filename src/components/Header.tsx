import React from "react";
import logo from "../images/photo-header.jpg";

const Header = () => {
  return (
    <React.Fragment>
      <div className="mt-28 lg:mt-0">
        <h1 className="sm:flex-auto animate__animated animate__fadeInLeft z-10 animate__slow uppercase monument-black p-6 mt-18 text-white text-2xl sm:text-7xl lg:text-8xl xsm:text-5xl">
          Front-End
          <br></br>Developer
        </h1>
      </div>
      <div
        className="lg:flex flex-auto w-22 p-6 lg:justify-center"
        data-aos="fade-in"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <img
          className="rounded-xl shadow-2xl rotate-6"
          width={"240px"}
          src={logo}
          alt="portret"
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
