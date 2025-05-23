import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Heart } from "lucide-react";

const AddToWishListButton = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div className={cn("absolute top-2 right-2 z-10", className)}>
      <button className="p-2.5 rounded-full hover:bg-shop_dark_blue hover:text-white bg-shop_lighter_bg hoverEffect">
        <Heart size={15} />
      </button>
    </div>
  );
};

export default AddToWishListButton;
