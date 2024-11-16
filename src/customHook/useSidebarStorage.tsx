import { useEffect, useState } from "react";

export default function useSidebarStorage() {
  const [selectMenu, setSelectMenu] = useState<string>(() => {
    const selectMenu = localStorage.getItem("selectMenu");
    return selectMenu || "";
  });
  useEffect(() => {
    localStorage.setItem("selectMenu", selectMenu);
  }, [selectMenu]);

  const handleSelectMenu = (menu: string) => {
    setSelectMenu((prevMenu) => (prevMenu === menu ? "" : menu));
  };
  return { selectMenu, handleSelectMenu };
}
