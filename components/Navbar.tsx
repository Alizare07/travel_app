import { NAV_LINKS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav
      className=" relative z-30 flexBetween max-container
  padding-container py-5"
    >
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    <Menu/>
    </nav>
  );
};

export default Navbar;
