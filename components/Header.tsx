import CartIcon from "./CartIcon";
import Container from "./Container";
import FavoriteButton from "./FavoriteButton";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-white py-5 border-b border-b-black/20">
      <Container className="flex items-center justify-between">
        <Logo />
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
