"use client";
import { Product } from "@/sanity.types";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product, className }: Props) => {
  const isOutOfStock = product?.stock === 0;

  const handleAddToCart = () => {
    alert("Added to cart");
  };
  return (
    <div className="w-full h-12 flex items-center">
      <Button
        onClick={handleAddToCart}
        disabled={isOutOfStock}
        className={cn(
          "w-full bg-shop_dark_blue/80 text-shop_light_bg shadow-none border border-shop_dark_blue/80 font-semibold tracking-wide hover:bg-shop_dark_blue hover:border-shop_dark_blue hoverEffect",
          className
        )}
      >
        <ShoppingBag /> {isOutOfStock ? "Out of Stock" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
