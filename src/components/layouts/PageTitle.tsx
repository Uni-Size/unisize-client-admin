"use client";
import style from "./layout.module.scss";
interface PageTitleProp {
  title?: string;
  btnText?: string;
  handlerOnClickBTN?: () => void;
}

export default function PageTitle({
  title,
  btnText,
  handlerOnClickBTN,
}: PageTitleProp) {
  return (
    <div className={style.page_title__container}>
      <h2>{title}</h2>
      {handlerOnClickBTN && (
        <button onClick={handlerOnClickBTN}>{btnText}</button>
      )}
    </div>
  );
}
