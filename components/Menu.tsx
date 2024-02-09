"use client";
import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNav = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <div className="lg:hidden ">
      {navOpen && (
        <div className="flex flex-col gap-6 px-6 py-10 bg-slate-300 w-screen h-screen relative top-0 left-0 ">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="lg:hidden block"
        onClick={handleNav}
      />
    </div>
  );
};

export default Menu;
