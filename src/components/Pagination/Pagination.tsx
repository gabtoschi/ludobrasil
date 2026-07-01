import type { PaginationProps } from "./Pagination.types";

import './Pagination.css';

export default function Pagination(props: PaginationProps) {
  const changePage = (callback: () => void) => {
    callback();
    setTimeout(() => window.scrollTo(0, 0), 100);
  }

  const goToFirst = () => props.goToPage(0);
  const goToLast = () => props.goToPage(props.totalPages - 1);

  const navButton = (icon: string, callback: () => void, disabled?: boolean) => (
    <button
      disabled={disabled}
      className="bg-transparent border border-success border-opacity-50 border-2 rounded-2 user-select-none fs-4 navbutton"
      onClick={() => changePage(() => callback())}
    >
      <i className={`bi bi-${icon} text-body`} />
    </button>
  );

  return <div className="d-flex align-items-center justify-content-center my-4 gap-3">
    {navButton('skip-start-fill', goToFirst, props.isFirstPage)}
    {navButton('caret-left-fill', props.previousPage, props.isFirstPage)}

    <span className="fs-4 fw-bold text-success px-3">{props.currentPage + 1}</span>

    {navButton('caret-right-fill', props.nextPage, props.isLastPage)}
    {navButton('skip-end-fill', goToLast, props.isLastPage)}
  </div>;
}