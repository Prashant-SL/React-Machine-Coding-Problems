import { useMemo, useState } from "react";

export function useNewdata(fullData, limit = 10, initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = useMemo(() => {
    return Math.ceil(fullData.length / limit);
  }, [fullData, limit]);

  const data = useMemo(() => {
    const start = (currentPage - 1) * limit;
    const end = start + limit;
    return fullData.slice(start, end);
  }, [fullData, currentPage, limit]);

  return {
    data,
    currentPage,
    totalPages,
    setCurrentPage,
  };
}
