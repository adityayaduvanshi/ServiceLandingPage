import React from "react";
import { Navbar, HeaderContent } from "../components/index";

const Header = () => {
  return (
    <div className="bg-headerBackground lg:px-16 md:px-16  px-2">
      <Navbar />
      <HeaderContent />
    </div>
  );
};

export default Header;
