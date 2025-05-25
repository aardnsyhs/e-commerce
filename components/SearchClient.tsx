"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";
import { Product } from "@/sanity.types";

const SearchClient = ({ products }: { products: Product[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hover:text-shop_dark_blue hoverEffect flex items-center gap-2md:w-auto"
      >
        <Search className="w-5 h-5" />
      </button>
      <SearchModal open={isOpen} onOpenChange={setIsOpen} products={products} />
    </>
  );
};

export default SearchClient;
