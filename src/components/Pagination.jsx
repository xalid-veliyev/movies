import { useState } from "react";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const [pageSize, setPageSize] = useState(8);
  const [displayedPages, setDisplayedPages] = useState([]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const minPage = Math.max(currentPage - 3, 1);
    const maxPage = Math.min(currentPage + 3, totalPages);

    for (let i = minPage; i <= maxPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePageChange = (pageNumber) => {
    setDisplayedPages(generatePageNumbers());
    onPageChange(pageNumber);
  };

  useState(() => {
    setDisplayedPages(generatePageNumbers());
  }, [currentPage, totalPages]);

  return (
    <ul className="pagination">
      {currentPage > 1 && (
        <li onClick={() => handlePageChange(currentPage - 1)}>
          <span aria-hidden="true">&laquo;</span>
        </li>
      )}
      {displayedPages.map((number) => (
        <li
          key={number}
          className={number === currentPage ? "active" : ""}
          onClick={() => handlePageChange(number)}
        >
          {number}
        </li>
      ))}
      {currentPage < totalPages && (
        <li onClick={() => handlePageChange(currentPage + 1)}>
          <span aria-hidden="true">&raquo;</span>
        </li>
      )}
    </ul>
  );
}

export default Pagination;
