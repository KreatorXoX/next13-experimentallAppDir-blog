import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="max-w-7xl mx-auto flex flex-row justify-between items-center p-4 text-gray-800">
        <Link href={"/"}>
          <Image
            className="rounded-full object-cover bg-slate-300"
            height={50}
            width={50}
            src={
              "https://res.cloudinary.com/dinhhwb9x/image/upload/v1677034939/diamond_xnb01k.png"
            }
            alt="logo"
          />
        </Link>
        <Link
          href="/#"
          className="font-semibold text-base md:text-xl py-1 px-10 border border-orange-500 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
        >
          Subscribe
        </Link>
      </div>
    </header>
  );
};

export default Header;
