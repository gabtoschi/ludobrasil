export interface PaginationProps {
  currentPage: number;
  isFirstPage: boolean;
  isLastPage: boolean;
  totalPages: number;

  nextPage: () => void;
  previousPage: () => void;
  goToPage: (page: number) => void;
}