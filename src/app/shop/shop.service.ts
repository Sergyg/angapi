import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Pagination} from "../shared/models/pagination";
import {IBrand} from "../shared/models/brand.product";
import {IType} from "../shared/models/type.product";
import {map, of} from "rxjs";
import {ParamsShop} from "../shared/models/params.shop";
import {IProduct} from "../shared/models/products";
import {CustomHttpParamEncoder} from "../core/services/custom-http-param.encoder";

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'
  products: IProduct[] = [];
  brands: IBrand[] = [];
  types: IType[] = [];
  pagination: Pagination[] = [];
  // pagination = new Pagination();

  shopParams = new ParamsShop();

  constructor(private http: HttpClient) { }

  getProducts(shopParams: ParamsShop ){
    let params = new HttpParams({ encoder: new CustomHttpParamEncoder() });

    if (shopParams.brands.length > 0)
    {
      params = params.append('brand', shopParams.brands.toString())
    }

    if (shopParams.types.length > 0){
      {
        params = params.append('type', shopParams.types.toString())
      }

    }
    if (shopParams.search) {
      params = params.append('search', shopParams.search);
    }
    params = params.append('orderBy', shopParams.sort);
    params = params.append('pageNumber', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());


    return this.http.get<IProduct[]>(this.baseUrl + 'products', {observe: 'response', params})
      .pipe(
        map(response => {
          return response;
        })
      )
  }
  getProduct(id: number) {
    return this.http.get<IProduct>(this.baseUrl + 'products/' + id)
  }

  getBrands(){
    return this.http.get<IBrand[]>(this.baseUrl + 'products/brands');
  }
  getTypes(){
    return this.http.get<IType[]>(this.baseUrl + 'products/types');
  }
}

