import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
// Import our authentication service

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.user$.getValue()) {
      return true;
    }

    // Retain the attempted URL for redirection
    this.authService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }

}