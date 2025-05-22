import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="">
        {product?.images && (
          <Image
            src={urlFor(product?.images[0]).url()}
            alt="ProductImage"
            loading="lazy"
            width={700}
            height={700}
          />
        )}
      </div>
    </div>
  );
};

export default ProductCard;
