import { getAllProducts } from "@/sanity/queries";
import SearchClient from "./SearchClient";

const SearchBar = async () => {
  const products = await getAllProducts();

  return (
    <div>
      <SearchClient products={products} />
    </div>
  );
};

export default SearchBar;
