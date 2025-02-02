import { useEffect, useState } from "react";

export default function useYears() {
  const [yearsArr, setYearsArr] = useState<number[]>([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYearsArr(Array.from({ length: 5 }, (_, i) => currentYear - 3 + i));
  }, []);
  return yearsArr;
}
