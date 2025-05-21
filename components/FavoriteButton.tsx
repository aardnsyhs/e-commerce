import { Heart } from "lucide-react";
import Link from "next/link";

const FavoriteButton = () => {
  return (
    <Link href={"/cart"} className="group relative ">
      <Heart className="w-5 h-5 hover:text-shop_light_orange hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop_dark_blue text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default FavoriteButton;
