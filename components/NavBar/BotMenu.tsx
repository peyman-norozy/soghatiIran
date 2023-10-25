import { botMenuIcons } from "@/configs/hardcodes";
import { TStoreState } from "@/store/store";
import { useSelector } from "react-redux";

const BotMenu: React.FC = () => {
  const webMode = useSelector((state: TStoreState) => {
    return state.windowSize.webMode;
  });
  const active = useSelector((state: TStoreState) => {
    return state.menu.botMenu;
  });
  let a = 2;
  return (
    <nav
      className={`
        ${webMode ? "hidden" : "fixed"}
        bottom-0
        w-full
     bg-primary-white
        flex
        justify-around
        h-[10%]
        `}
    >
      {botMenuIcons.map((item) => {
        return (
          <button>
            <i
              className={`${item.styles} 
            text-[20px] 
            ${
              active === item.name
                ? "text-primary-white bg-primary-gary p-4 rounded-full "
                : "text-primary-gary"
            }`}
              key={`bot-menu-${item.name}`}
            />
          </button>
        );
      })}
    </nav>
  );
};
export default BotMenu;
