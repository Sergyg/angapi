import {IProduct} from "./products";

export interface IPagination
{
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
}

// import {IProduct} from "./products";
//
// export interface IPagination
// {
//   export interface IPagination {
//   pageIndex: number;
//   pageSize: number;
//   count: number;
//   data: IProduct[];
// }
//
export class Pagination implements IPagination {
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
}
