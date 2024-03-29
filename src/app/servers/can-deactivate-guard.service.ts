import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs-compat";

export interface CanComponentDeactivate{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactiveGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}