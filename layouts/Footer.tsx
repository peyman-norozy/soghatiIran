import CompanyDetails from "@/components/Footer/CompanyDetails";
import TopFooter from "@/components/Footer/TopFooter";
import Container from "@/components/UI/Container";
import { TStoreState } from "@/store/store";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Footer: React.FC = () => {
  const webMode = useSelector((state: TStoreState) => state.windowSize.webMode);
  return (
    <footer
      className="
        w-full
        h-[551px]
        bg-primary-gary
        rounded-t-[56px]
        pt-[16px]
        text-primary-white
        "
    >
      <Container>
        <TopFooter />
        <div></div>
        <div></div>
      </Container>
    </footer>
  );
};
export default Footer;
