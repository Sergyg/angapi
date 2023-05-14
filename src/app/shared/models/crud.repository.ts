import {map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { CrudOperations } from './icrud.repository';
import { BaseModel } from "./base";
import {environment} from "../../../environments/environment";
import {PageRequest} from "./page.request";
import {Page} from "./page";


export abstract class CrudService <T extends BaseModel<T>> implements CrudOperations<T> {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    protected _http: HttpClient,
    private tConstructor: { new (m: Partial<T>, ...args: unknown[]): T },
    protected _endpoint: string,
  ) {}

  _apiUrl=environment.apiUrl;

  public create(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    return this._http
      .post<T>(`${this._apiUrl}`, resource.toJson())
      .pipe(
        map((result) => new this.tConstructor(result)));

  }

  public update(resource: Partial<T> & { toJson: () => T }): Observable<T> {
    return this._http
      .put<T>(`${this._apiUrl}/${resource.id}`, resource.toJson())
      .pipe(map((result) => new this.tConstructor(result)));;
  }

  public getById(id: number): Observable<T> {
    return this._http
      .get<T>(`${this._apiUrl}/${id}`)
      .pipe(map((result) => new this.tConstructor(result)));
  }

  public get(pageRequest?: PageRequest): Observable<Page<T>> {
    const params: {[key: string]: any} = !pageRequest ? {} : {
      pageNumber: pageRequest.page,
      pageSize: pageRequest.size,
      sortCol: pageRequest.sort.column,
      sortDir: pageRequest.sort.direction
    };

      return this._http
      .get<Page<T>>(`${this._apiUrl}${this._endpoint}`, {params: params});

        // .pipe(map((result) => result.map((i) => new this.tConstructor(i))));

  }

 public delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this._apiUrl}/${id}`);
  }

  public deleteAll(): Observable<void> {
    return this._http.delete<void>(`${this._apiUrl}`);
  }
}
