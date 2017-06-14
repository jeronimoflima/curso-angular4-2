import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from "rxjs/Rx";


@Injectable()
export class AlunosGuard implements CanActivateChild{

    	canActivateChild(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean{

      console.log('AlunosGuard: Rota Filha');
      return true;
    }
}
