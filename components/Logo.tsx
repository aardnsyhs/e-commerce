import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href={"/"}>
      <h2
        className={cn(
          "text-2xl text-shop_dark_blue font-black tracking-wider uppercase hover:text-shop_orange hoverEffect group font-sans",
          className
        )}
      >
        Shop
        <span
          className={cn(
            "text-shop_orange group-hover:text-shop_dark_blue hoverEffect",
            spanDesign
          )}
        >
          enix
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
