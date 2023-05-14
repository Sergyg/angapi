import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IProduct} from "../../shared/models/products";
import {CrudService} from "../../shared/models/crud.repository";

@Injectable({
  providedIn: 'root'
})
export class ProductService extends CrudService<IProduct> {
  constructor(private http: HttpClient) {
    super(http, IProduct, `Products`);
  }
}
