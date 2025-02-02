"use client";
import useYears from "@/hooks/useYears";
import Button from "../asset/button/Button";
import style from "./layout.module.scss";
import PageTitle from "./PageTitle";
import Checkbox from "../asset/inputs/Checkbox";
import Radio from "../asset/inputs/Radio";

export default function SchoolFormLayout({
  pageTitle = "학교등록",
  pageBtnText = "등록",
}) {
  const handlerClickTitleBTN = () => {};
  const yearsArr = useYears();

  return (
    <div className={style.school_form}>
      <PageTitle
        title={pageTitle}
        btnText={pageBtnText}
        handlerOnClickBTN={handlerClickTitleBTN}
      />
      <div className={style.category}>
        <h4>카테고리</h4>
        <ul className={style.category_container}>
          <li>
            1차
            <ul>
              <li>초등학교</li>
              <li>중학교</li>
              <li>고등학교</li>
            </ul>
          </li>
          <li>2차</li>
          <li>3차</li>
        </ul>
        <Button>선택</Button>
      </div>
      <div className={style.infoText}>
        <h4>기본정보</h4>
        <div>
          <p>
            학교 <span>고등학교/일반고/충북고등학교</span>
          </p>
          <p>
            학교 코드 <input type="text" placeholder="학교코드" />
          </p>
          <p>
            판매타입
            <span className={style.salesType_container}>
              <Radio title="일반판매" value="general" name="salesType" />
              <Radio title="주관판매" value="supervised" name="salesType" />
              {yearsArr.map((year) => (
                <Checkbox key={year} value={year} />
              ))}
            </span>
          </p>
        </div>
      </div>
      <div className={style.essential_option}>
        <h4>필수옵션</h4>
        <ul>
          <li className={style.option_container}>
            <span className={style.plus}>+</span>
            <span>상품코드</span>
            <span>상품명</span>
            <span>계약가</span>
          </li>
          <li className={style.option_container}>
            <span className={style.plus} />
            <input placeholder="상품코드" />
            <input placeholder="상품명" />
            <input placeholder="계약가" />
          </li>
        </ul>
      </div>
      <div className={style.select_option}>
        <h4>추가옵션</h4>
        <ul>
          <li className={style.option_container}>
            <span className={style.plus}>+</span>
            <span>상품코드</span>
            <span>상품명</span>
            <span>계약가</span>
          </li>
        </ul>
      </div>
      <div className={style.stock}>
        <h4>재고</h4>
        <ul>
          <li className={style.stock_container}>
            <p>상품코드</p>
            <span>차수</span>
            <span>재고</span>
            <span>가용재고</span>
          </li>
        </ul>
      </div>
      <div className={style.editHistory}>
        <h4>변경내역</h4>
        <p></p>
      </div>
    </div>
  );
}
