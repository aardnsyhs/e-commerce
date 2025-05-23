import Link from "next/link";
import { Title } from "./ui/text";
import { getAllBrands } from "@/sanity/queries";

const ShopByBrands = async () => {
  const brands = await getAllBrands();

  return (
    <div className="mb-10 lg:pb-20 bg-shop_light_bg p-5 lg:p-7 rounded-md">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title>Shop by Brands</Title>
        <Link
          href={"/shop"}
          className="text-sm font-semibold tracking-wide hover:text-shop_btn_dark_blue hoverEffect"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default ShopByBrands;
