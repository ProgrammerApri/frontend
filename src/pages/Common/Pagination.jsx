import React, { useEffect, useState } from "react";

export default function Pagination({
  urlApi = "",
  data,
  setData,
  itemsPerPage = 10,
  maxPageButtons = 10,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePageRange, setVisiblePageRange] = useState([1, maxPageButtons]);

  //   this will only apply if there is object total in data from api
  const totalPages = Math.ceil(data.total / itemsPerPage);
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    const skip = (currentPage - 1) * itemsPerPage;
    const url = `${urlApi}?limit=${itemsPerPage}&skip=${skip}`;

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  const updateVisiblePageRange = (currentPage) => {
    const halfMaxButtons = Math.floor(maxPageButtons / 2);
    const start = Math.max(1, currentPage - halfMaxButtons);
    const end = Math.min(totalPages, start + maxPageButtons - 1);
    setVisiblePageRange([start, end]);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    updateVisiblePageRange(newPage);
  };
  return (
    <nav className="flex items-center space-x-2">
      <button
        className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
        onClick={() => handlePageChange(currentPage - 1)}>
        <span aria-hidden="true">«</span>
        <span className="sr-only">Previous</span>
      </button>
      {Array.from(
        { length: visiblePageRange[1] - visiblePageRange[0] + 1 },
        (_, index) => {
          const page = index + visiblePageRange[0];
          return (
            <button
              key={index + 1}
              className={`w-10 h-10 p-4 inline-flex items-center text-center text-sm font-medium rounded-full ${
                page === currentPage
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-blue-500"
              }`}
              onClick={() => handlePageChange(page)}>
              {page}
            </button>
          );
        }
      )}
      <button
        className="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md"
        onClick={() => handlePageChange(currentPage + 1)}>
        <span className="sr-only">Next</span>
        <span aria-hidden="true">»</span>
      </button>
    </nav>
  );
}
