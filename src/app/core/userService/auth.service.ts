import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { APP_CONFIG, IappConfig } from './app.config';
import { BrowserStorageService, HttpService } from '@app/core';
import { Router } from '@angular/router';
import { AuthTokenType } from './auth-token-type';
import { HttpErrorResponse } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { map, catchError } from 'rxjs/operators';
import { Icredentials } from '@app/authentication/icredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public authService$: Observable<boolean> = this.authStatusSource.asObservable();
  private rememberMeToken: string = 'rememberMe_token';
  public redirectUrl: string;

  constructor(@Inject(APP_CONFIG) private appConfig: IappConfig,
    private browserStorageService: BrowserStorageService,
    private http: HttpService,
    private router: Router) {
    this.updateStatusOnPageRefresh();
  }

  public rememberMe(): boolean {
    return this.browserStorageService.getLocal(this.rememberMeToken) === true;
  }

  public getRawAuthToken(tokenType: AuthTokenType): string {
    if (this.rememberMe())
      return this.browserStorageService.getLocal(AuthTokenType[tokenType]);
    else
      return this.browserStorageService.getSession(AuthTokenType[tokenType]);
  }

  private setLoginSession(response: any): void {
    this.setToken(AuthTokenType.AccessToken, response[this.appConfig.accessTokenObjectKey]);
    this.setToken(AuthTokenType.RefreshToken, response[this.appConfig.refreshTokenObjectKey]);
  }

  private setToken(tokenType: AuthTokenType, tokenValue: string): void {
    if (this.rememberMe())
      this.browserStorageService.setLocal(AuthTokenType[tokenType], tokenValue);
    else
      this.browserStorageService.setSession(AuthTokenType[tokenType], tokenValue);
  }

  public deleteAuthTokens() {
    if (this.rememberMe()) {
      this.browserStorageService.removeLocal(AuthTokenType[AuthTokenType.AccessToken]);
      this.browserStorageService.removeLocal(AuthTokenType[AuthTokenType.RefreshToken]);
    } else {
      this.browserStorageService.removeSession(AuthTokenType[AuthTokenType.AccessToken]);
      this.browserStorageService.removeSession(AuthTokenType[AuthTokenType.RefreshToken]);
    }
    this.browserStorageService.removeLocal(this.rememberMeToken);
  }

  private updateStatusOnPageRefresh(): void {
    this.authStatusSource.next(this.isLoggedIn());
  }

  public getToken(): string {
    return this.getRawAuthToken(AuthTokenType.AccessToken);
  }
  public isLoggedIn(): boolean {
    const accessToken = this.getRawAuthToken(AuthTokenType.AccessToken);
    const refreshToken = this.getRawAuthToken(AuthTokenType.RefreshToken);
    //   const hasTokens = !this.isEmptyString(accessToken) && !this.isEmptyString(refreshToken);
    const hasTokens = !this.isEmptyString(accessToken);
    return hasTokens && !this.isAccessTokenTokenExpired();
  }

  private isEmptyString(value: string): boolean {
    return !value || 0 === value.length;
  }

  public logout(navigationToHome: boolean): void {
    this.deleteAuthTokens();
    this.authStatusSource.next(false);
    if (navigationToHome)
      this.router.navigate(['/login']);
  }

  private getDecodedAccessToken(): any {
    return jwt_decode(this.getRawAuthToken(AuthTokenType.AccessToken));
  }

  public getDisplayName(): string {
    return this.getDecodedAccessToken().unique_name;
  }

  public getUserId(): string {
    return this.getDecodedAccessToken().id;
  }

  public getAccessTokenExpirationDateUtc(): Date {
    const decoded = this.getDecodedAccessToken();
    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0); // The 0 sets the date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  public isAccessTokenTokenExpired(): boolean {
    const expirationDateUtc = this.getAccessTokenExpirationDateUtc();
    if (!expirationDateUtc) {
      return true;
    }
    return !(expirationDateUtc.valueOf() > new Date().valueOf());
  }
}
