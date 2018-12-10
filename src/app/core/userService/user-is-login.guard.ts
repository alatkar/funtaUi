import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '..';

@Injectable({
  providedIn: 'root'
})
export class UserIsLoginGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLoggedIn(state.url);
  }

  private checkLoggedIn(url: string): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.auth.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
