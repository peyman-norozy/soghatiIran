import NavBigScreen from "@/components/NavBar/NavBigScreen";
import Container from "@/components/UI/Container";
import { responsiveSize } from "@/utils/styleFunctions";

const Header: React.FC = () => {
  return (
    <header
      className="
    lg:mt-24
    mt-40
    bg-primary-red
    "
    >
      <Container>
        <NavBigScreen />
      </Container>
    </header>
  );
};
export default Header;
