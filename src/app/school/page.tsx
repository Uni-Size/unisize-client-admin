"use client";
import PageTitle from "@/components/layouts/PageTitle";
import SearchLayout from "@/components/layouts/SearchLayout";
import { useRouter } from "next/navigation";
import style from "./style.module.scss";

export default function Page() {
  const router = useRouter();
  const handlerClickTitleBTN = () => {
    router.push("/student/add");
  };
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - 3 + i);

  return (
    <>
      <PageTitle
        title="학생조회"
        btnText="학생등록"
        handlerOnClickBTN={handlerClickTitleBTN}
      />
      <SearchLayout>
        <div>
          <h4>검색어</h4>
          <div>
            <input />
          </div>
        </div>
        <div>
          <h4>주관구매</h4>
          <div className={style.search__checkbox}>
            {years.map((year) => (
              <label key={year}>
                <input type="checkbox" name="year" value={year} />
                {year}
              </label>
            ))}
          </div>
        </div>
      </SearchLayout>
    </>
  );
}
