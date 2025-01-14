import style from "./layout.module.scss";

import Button from "../asset/Button";

interface SearchLayoutProt {
  children: React.ReactNode;
}
export default function SearchLayout({ children }: SearchLayoutProt) {
  return (
    <div className={style.search__container}>
      {children}
      <div>
        <Button>검색</Button>
        <Button>초기화</Button>
      </div>
    </div>
  );
}
