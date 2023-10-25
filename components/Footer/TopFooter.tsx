import { botMenuCard } from "@/configs/hardcodes";
import CompanyDetails from "./CompanyDetails";
import FooterCard from "./FooterCard";

const TopFooter: React.FC = () => {
  return (
    <div
      className="
        flex
        "
    >
      <CompanyDetails />
      {botMenuCard.map((item) => {
        return <FooterCard img={item.img} text={item.text} />;
      })}
    </div>
  );
};
export default TopFooter;
