interface ListLayoutProp {
  children: React.ReactNode;
  searchTotal?: number;
}
export default function ListLayout({ children, searchTotal }: ListLayoutProp) {
  return (
    <div>
      검색 {searchTotal}개{children}
    </div>
  );
}
