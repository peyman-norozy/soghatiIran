import NavBigScreen from "@/components/NavBar/NavBigScreen";
import NavSmallScreen from "@/components/NavBar/NavSmallScreen";
import Container from "@/components/UI/Container";
import { TStoreState } from "@/store/store";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const webMode = useSelector((state: TStoreState) => state.windowSize.webMode);
  console.log(webMode);
  return (
    <header
      className="
    lg:mt-24
    mt-40
    absolute
    top-0
    w-full
    animation-opacity-width
    "
    >
      <Container>{webMode ? <NavBigScreen /> : <NavSmallScreen />}</Container>
    </header>
  );
};
export default Header;
