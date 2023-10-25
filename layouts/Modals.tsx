import Grouping from "@/components/Modals/Grouping";
import { MobileMenu } from "@/components/NavBar/Menu";
import { ModalActions } from "@/store/Slices/ModalsSlice";
import { TStoreState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

const Modals: React.FC = () => {
  const show: boolean = useSelector((state: TStoreState) => {
    return state.modal.show;
  });
  const modalType = useSelector((state: TStoreState) => {
    return state.modal.modalType;
  });
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`
        ${
          show ? "animation-opacity-open" : "mr-[-100%] animation-opacity-close"
        }
        w-full
        fixed
        overflow-hidden
         bg-primary-transparent
        h-full
        z-40
        right-0
        `}
        onClick={(event) => {
          event.stopPropagation();
          if (event.target !== event.currentTarget) return;
          dispatch(ModalActions.showOff());
        }}
      >
        <MobileMenu show={modalType === "menu"} />
        <Grouping show={modalType === "grouping"} />
      </div>
    </>
  );
};
export default Modals;
