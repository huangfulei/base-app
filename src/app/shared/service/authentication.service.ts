import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import {User} from '../model/user';
import {environment} from '../../../environments/environment';
import {Tokens} from '../model/tokens';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${environment.apiUrl}/token/`, user)
      .pipe(
        tap((tokens) => {
          console.log(tokens);
          this.doLoginUser(user, tokens);
        }),
        mapTo(true),
        catchError(err => {
          console.log(err.error);
          return of(false);
        })
        /*map((user: User) => {
          // login successful if there's a jwt token in the response
          if (user && user.token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.doLoginUser(user);
            // localStorage.setItem('currentUser', JSON.stringify(user));
          }

          return user;
        })*/);
  }

  logout() {
    // remove user from local storage to log user out
    return this.http.post<any>(`${environment.apiUrl}/users/logout`, {
      refreshToken: this.getRefreshToken()
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        alert(error.error);
        return of(false);
      }));
    // localStorage.removeItem('currentUser');
    // this.currentUserSubject.next(null);
  }

  private doLoginUser(user: User, token: Tokens) {
    this.currentUserSubject.next(user);
    this.storeTokens(token);
  }

  private doLogoutUser() {
    this.currentUserSubject.next(null);
    this.removeTokens();
  }

  public refreshToken() {
    return this.http.post<any>(`${environment.apiUrl}/token/refresh/`, {
      refreshToken: this.getRefreshToken()
    }).pipe(tap((tokens: Tokens) => {
      this.storeJwtToken(tokens.access);
    }));
  }

  public getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.access);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
