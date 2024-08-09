export interface IPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (number: number) => void;
}

export interface IPageNumber {
  className: string;
}
