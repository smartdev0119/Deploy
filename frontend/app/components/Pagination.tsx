interface PaginationProps {
  page: number;
  total: number;
  pageSize?: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, total, pageSize = 10, onPageChange }) => {
  const pages = Math.ceil(total / pageSize);

  return (
    <div className="flex justify-center space-x-1">
      {Array.from({ length: pages }, (_, index) => index + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          className={`px-4 py-2 ${page === pageNumber ? 'text-blue-600' : 'text-gray-600'}`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;