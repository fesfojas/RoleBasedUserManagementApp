import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROUTE_PATHS } from '../../constants/route-paths.constants';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    ROUTE_PATHS: any = ROUTE_PATHS;

    constructor(private router: Router) { }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {

        if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
            return true;
        }

        this.router.navigate([this.ROUTE_PATHS.LOGIN]);
        return false;
    }
}