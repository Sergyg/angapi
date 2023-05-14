import { Observable } from 'rxjs';
import {BaseModel} from "./base";
import {PageRequest} from "./page.request";
import {Page} from "./page";

export interface CrudOperations<T extends BaseModel<T>> {
  create(t: T): Observable<T>;
  update(resource: Partial<T>): Observable<T>;
  getById(id: number): Observable<T>;
  get(pageRequest?: PageRequest): Observable<Page<T>>;
  delete(id: number): Observable<any>;
  deleteAll(): Observable<any>;

}
