import React from "react";
import { PaginationContainer, PageNumber, NavButton } from "./styles";
import { IPagination } from "./types";

const Pagination: React.FC<IPagination> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = [];

  const maxPageNumbersToShow = window.innerWidth < 768 ? 3 : 5; //Identifica o tamanho da tela assim que abrir a aplicação e set a quantidade maxima de paginas.
  const halfPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

  let startPage = Math.max(1, currentPage - halfPageNumbersToShow);
  let endPage = Math.min(totalPages, currentPage + halfPageNumbersToShow);

  if (currentPage <= halfPageNumbersToShow) {
    endPage = Math.min(totalPages, maxPageNumbersToShow);
  } else if (currentPage + halfPageNumbersToShow >= totalPages) {
    startPage = Math.max(1, totalPages - maxPageNumbersToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationContainer>
      {currentPage > 1 && (
        <>
          <NavButton onClick={() => onPageChange(1)}>&laquo;</NavButton>
          <NavButton onClick={() => onPageChange(currentPage - 1)}>
            &lsaquo;
          </NavButton>
        </>
      )}
      {pageNumbers.map((number) => (
        <PageNumber
          key={number}
          onClick={() => onPageChange(number)}
          className={number === currentPage ? "active" : ""}
        >
          {number}
        </PageNumber>
      ))}
      {currentPage < totalPages && (
        <>
          <NavButton onClick={() => onPageChange(currentPage + 1)}>
            &rsaquo;
          </NavButton>
          <NavButton onClick={() => onPageChange(totalPages)}>
            &raquo;
          </NavButton>
        </>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
