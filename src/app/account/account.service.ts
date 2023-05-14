import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, map, of} from "rxjs";
import {Address, IUser} from "../shared/models/user";
import {Router, Routes} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private  currentUserSource = new BehaviorSubject<IUser | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  getCurrentUserValue(){
    return this.currentUserSource.value;
  }

  loadCurrentUser(token: string | null) {
    if (token == null) {
      this.currentUserSource.next(null);
      return of(null);
    }
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    return this.http.get<IUser>(this.baseUrl + 'account', {headers}).pipe(
      map (user => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
          return user;
        } else {
          return null;
        }
      })
    )
  }

  login(values: any){
    return this.http.post<IUser>(this.baseUrl + 'account/login', values).pipe(
      map(user => {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);

      })
    );
  }
  register(values: any){
    return this.http.post<IUser>(this.baseUrl + 'account/register', values).pipe(
      map(user => {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
      })
    );
  }
  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get(this.baseUrl + '/account/emailexists?email=' + email);

  }
  getUserAddress() {
    return this.http.get<Address>(this.baseUrl + 'account/savedAddress');
  }

  updateUserAddress(address: Address) {
    return this.http.put(this.baseUrl + 'account/savedAddress', address);
  }
}
