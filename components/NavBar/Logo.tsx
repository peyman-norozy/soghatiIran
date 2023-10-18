import { responsiveSize } from "@/utils/styleFunctions";

const Logo: React.FC = () => {
  console.log(responsiveSize({ upSize: 40, downSize: 8, styleType: "ml" }));
  return (
    <img
      className="  
        2xl:h-[96px] 
        xl:h-[84.8px]
        lg:h-[73.6px]
        md:h-[62.400000000000006]
        sm:h-[51.2px]
        h-[40px]
        2xl:w-[120px] 
        xl:w-[106px]
        lg:w-[92px]
        md:w-[78]
        sm:w-[64px]
        w-[50px]
        2xl:ml-[40px] 
        xl:ml-[33.6px]
        lg:ml-[27.2px]
        md:ml-[20.8]
        sm:ml-[14.4px]
        "
      src="/assets/icons/LOGO.svg"
      alt=""
    />
  );
};
export default Logo;
