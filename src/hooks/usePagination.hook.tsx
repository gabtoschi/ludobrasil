import { useMemo, useState } from "react";

const DEFAULT_PAGE_SIZE = 10;

export default function usePagination<T>(list: T[], pageSize = DEFAULT_PAGE_SIZE) {
  const totalPages = useMemo(() => Math.ceil(list.length / pageSize), [list, pageSize]);

  const [currentPage, setCurrentPage] = useState(0);
  const isFirstPage = useMemo(() => currentPage === 0, [currentPage]);
  const isLastPage = useMemo(() => currentPage === totalPages - 1, [currentPage, totalPages]);

  const getCurrentItems = (newPage: number) => {
    const start = newPage * pageSize;
    const end = start + pageSize;

    return list.slice(start, end);
  }

  const [currentItems, setCurrentItems] = useState<T[]>(getCurrentItems(0));
  const updateItems = (newPage: number) => setCurrentItems(getCurrentItems(newPage));

  const nextPage = () => {
    if (isLastPage) return;
    setCurrentPage(currentPage + 1);
    updateItems(currentPage + 1);
  }

  const previousPage = () => {
    if (isFirstPage) return;
    setCurrentPage(currentPage - 1);
    updateItems(currentPage - 1);
  }

  const goToPage = (page: number) => {
    if (page < 0 || page >= totalPages) return;
    setCurrentPage(page);
    updateItems(page);
  }

  return {
    currentPage,
    currentItems,
    totalPages,
    isFirstPage,
    isLastPage,
    nextPage,
    previousPage,
    goToPage,
  }

}