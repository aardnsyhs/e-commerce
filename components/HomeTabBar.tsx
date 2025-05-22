import { productType } from "@/constants/data";
import Link from "next/link";

interface HomeTabBarProps {
  selectedTab?: string;
  onTabSelect?: (tab: string) => void;
}

const HomeTabBar = ({ selectedTab, onTabSelect }: HomeTabBarProps) => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-5">
      <div className="flex items-center gap-3 text-sm font-semibold">
        {productType?.map((item) => (
          <button
            key={item?.title}
            className={`border border-shop_orange/20 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_orange hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop_orange text-white border-shop_dark_blue" : "bg-shop_orange/20"}`}
            onClick={() => onTabSelect?.(item?.title)}
          >
            {item?.title}
          </button>
        ))}
      </div>
      <Link
        href={"/shop"}
        className="border border-shop_orange/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_orange hover:text-white hoverEffect"
      >
        See all
      </Link>
    </div>
  );
};

export default HomeTabBar;
