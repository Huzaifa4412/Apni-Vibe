// components/Pagination.tsx
import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [current, setCurrent] = useState(currentPage);

  const handlePrev = () => {
    const prevPage = Math.max(current - 1, 1);
    setCurrent(prevPage);
    onPageChange(prevPage);
  };

  const handleNext = () => {
    const nextPage = Math.min(current + 1, totalPages);
    setCurrent(nextPage);
    onPageChange(nextPage);
  };

  const handlePageClick = (page: number) => {
    setCurrent(page);
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`px-4 py-2 mx-1 rounded ${
            current === i ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        className={`px-4 py-2 rounded ${
          current === 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
        onClick={handlePrev}
        disabled={current === 1}
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        className={`px-4 py-2 rounded ${
          current === totalPages
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white"
        }`}
        onClick={handleNext}
        disabled={current === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
