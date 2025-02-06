import React from "react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;
  // let firstPage = 1;
  // let lastPage = totalPages;
  // if (currentPage - 2 >= 1) {
  //   firstPage = currentPage - 2;
  // }

  // if (currentPage + 2 <= lastPage) {
  //   lastPage = currentPage + 2;
  // }

  return (
    <div className="flex w-full m-auto justify-evenly py-4 md:text-2xl text-xl text-[#3865d2]">
      {prevPage ? (
        <Link href={`?page=${prevPage}`}>Previous</Link>
      ) : (
        <div></div>
      )}
      <span>{` Page ${currentPage} of ${totalPages}`}</span>
      {nextPage ? <Link href={`?page=${nextPage}`}>Next</Link> : <div></div>}
    </div>
  );
};

export default Pagination;
