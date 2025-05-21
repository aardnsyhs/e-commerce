"use client";

import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {headerData?.map((item) => (
        <Link
          key={item?.title}
          href={item?.href}
          className={`hover:text-shop_orange hoverEffect relative group`}
        >
          {item?.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_orange group-hover:w-1/2 hoverEffect group-hover:left-0`}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_orange group-hover:w-1/2 hoverEffect group-hover:right-0`}
          />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
