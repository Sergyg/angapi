import { PageRequest } from './page.request';

export class Page<T> {
  public elements: T[];
  public totalElements: number;
  public totalPages: number;
  public current: PageRequest;
  public next: PageRequest;
  public previous: PageRequest;

  constructor(obj: any) {
    Object.assign(this, obj);
  }
}
