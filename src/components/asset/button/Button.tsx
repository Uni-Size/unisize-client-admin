import style from "./button.module.scss";
interface ButtonProp {
  onClick?: () => void;
  children: React.ReactNode | string;
}
export default function Button({ onClick, children }: ButtonProp) {
  return (
    <button type="button" onClick={onClick} className={style.button_container}>
      {children}
    </button>
  );
}
