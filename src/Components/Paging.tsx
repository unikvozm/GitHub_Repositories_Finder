import React from "react";

interface OwnProps {
  selectedPage: number;
  numberOfPages: number;
  onPageChange: (page: number) => void;
}

export default function Paging(props: OwnProps) {
  const { selectedPage, numberOfPages, onPageChange } = props;

  const handleFirstPageClick = (): void => {
    if (selectedPage) {
      onPageChange(1);
    }
  };

  const handlePrevPageClick = (): void => {
    if (selectedPage) {
      onPageChange(selectedPage - 1);
    }
  };

  const handleNextPageClick = (): void => {
    if (selectedPage !== numberOfPages) {
      onPageChange(selectedPage + 1);
    }
  };

  const handleLastPageClick = (): void => {
    if (selectedPage !== numberOfPages) {
      onPageChange(numberOfPages);
    }
  };

  const renderPages = () => {
    const paginationItems = [];
    const startPage = selectedPage < 3 ? 1 : selectedPage - 2;
    const endPage = numberOfPages < 3 ? numberOfPages || 2 : startPage + 3;
    for (let i = startPage; i < endPage; i += 1) {
      const activeClassName =
        i === selectedPage ? " btn-primary" : "btn-outline-primary";
      
      paginationItems.push(
        // @ts-ignore
        <button
          className={`${activeClassName}`}
          key={i}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return paginationItems;
  };

  const isDisabledPrevBtn = selectedPage === 1;
  const isDisabledNextBtn = numberOfPages - selectedPage - 1 <= 0;
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <button
          className="btn-outline-primary"
          disabled={isDisabledPrevBtn}
          onClick={handleFirstPageClick}
        >
          &laquo;
        </button>
        <button
          className="btn-outline-primary"
          disabled={isDisabledPrevBtn}
          onClick={handlePrevPageClick}
        >
          &lsaquo;
        </button>

        {renderPages()}

        <button
          className="btn-outline-primary"
          disabled={isDisabledNextBtn}
          onClick={handleNextPageClick}
        >
          &rsaquo;
        </button>
        <button
          className="btn-outline-primary"
          disabled={isDisabledNextBtn}
          onClick={handleLastPageClick}
        >
          &raquo;
        </button>
      </ul>
    </nav>
  );
}
