import { ReactNode } from "react";
import style from "./modal.module.scss";
interface PopupProps {
  isOpen?: boolean;
  onConfirm?: () => void; // 확인 클릭 시 동작하는 함수
  children?: ReactNode;
}

const ModalLayout = ({ isOpen, onConfirm, children }: PopupProps) => {
  return (
    <div className={`${style.modal_container} ${isOpen ? style.active : ""}`}>
      <div className={style.modal_dimmed} />
      <div className={style.modal_content}>
        <div className="popup-cont">{children}</div>
        <ul className="submit-btn">
          <li>
            <button className="btn btn-green" onClick={onConfirm}>
              확인
            </button>
          </li>
          <li>
            <button
              className="btn btn-gray popup-cancel-btn"
              // onClick={closeModal}
            >
              취소
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ModalLayout;
