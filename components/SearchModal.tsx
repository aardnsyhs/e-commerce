"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/sanity.types";
import PriceView from "./PriceView";
import Logo from "./Logo";
import AddToCartButton from "./AddToCartButton";

const SearchModal = ({
  open,
  onOpenChange,
  products,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  products: Product[];
}) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Product[]>(products.slice(0, 7));

  useEffect(() => {
    if (search.trim() === "") {
      setFiltered(products.slice(0, 7));
    } else {
      const result = products.filter((item) =>
        item?.name?.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(result);
    }
  }, [search, products]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="rounded-xl p-6 shadow-lg"
        style={{
          width: "95vw",
          maxWidth: "1200px",
        }}
        forceMount
      >
        <DialogTitle className="text-xl font-bold mb-4">
          Product Searchbar
        </DialogTitle>
        <div className="relative">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mb-4">
            <input
              type="text"
              className="ml-2 w-full outline-none"
              placeholder="Search your product here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            {search && (
              <button onClick={() => setSearch("")}>
                <X className="w-5 h-5 text-gray-400 hover:text-red-600" />
              </button>
            )}
            <Search className="ms-2 w-5 h-5 text-gray-400" />
          </div>
          {search === "" ? (
            <div className="flex items-center bg-gray-100 px-4 py-3 rounded text-sm text-gray-700 mb-4">
              <Search className="w-4 h-4" />
              <span className="ms-2 font-semibold">
                Search and explore your products from
              </span>
              <Logo className="ms-1 text-sm" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="bg-gray-100 px-4 py-3 rounded text-sm text-gray-700 mb-4">
              <span>
                Nothing match with the keyword{" "}
                <span className="text-red-600 underline font-semibold">
                  {search}
                </span>
                . Please try something else.
              </span>
            </div>
          ) : (
            <div className="flex items-center bg-gray-100 px-4 py-3 rounded text-sm text-gray-700 mb-4">
              <Search className="w-4 h-4" />
              <span className="ms-2 font-semibold">
                Search and explore your products from
              </span>
              <Logo className="ms-1 text-sm" />
            </div>
          )}
          <ul className="space-y-2 max-h-[400px] overflow-y-auto">
            {filtered.length > 0 &&
              filtered.map((product) => (
                <li key={product._id}>
                  {search === "" ? (
                    <button
                      className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg w-full text-left"
                      onClick={() => setSearch(product.name || "")}
                    >
                      <Search className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{product.name}</span>
                    </button>
                  ) : (
                    <div className="flex gap-4 p-3 border rounded-lg items-start relative w-full">
                      {/* Gambar Produk */}
                      <div className="w-20 h-20 relative shrink-0 rounded-md overflow-hidden border">
                        {product.images?.[0] && (
                          <Image
                            src={urlFor(product.images[0]).url()}
                            alt={product.name || "Product Image"}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        )}
                      </div>
                      <div className="flex flex-col flex-1">
                        <Link
                          href={`/product/${product?.slug?.current}`}
                          className="text-sm md:text-base font-medium text-gray-900 hover:underline"
                          onClick={() => onOpenChange(false)}
                        >
                          {product.name}
                        </Link>
                        <div className="mt-2">
                          <AddToCartButton
                            product={product}
                            className="rounded-md w-36"
                          />
                        </div>
                      </div>
                      {product.price && (
                        <div className="absolute top-3 right-3">
                          <PriceView
                            price={product.price}
                            discount={product.discount}
                            className="text-green-700 font-semibold text-sm"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
