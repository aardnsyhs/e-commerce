import Link from "next/link";
import { Title } from "./ui/text";
import Image from "next/image";
import { banner_1 } from "@/images";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-shop_light_orange rounded-lg px-10 lg:px-24 flex items-center justify-between">
      <div className="space-y-5">
        <Title>
          Grab Up to 50% off on <br /> Selected headphone
        </Title>
        <Link
          href={"/shop"}
          className="bg-shop_dark_blue/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_blue hoverEffect"
        >
          Buy Now
        </Link>
      </div>
      <div className="">
        <Image
          src={banner_1}
          alt="banner_1"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
