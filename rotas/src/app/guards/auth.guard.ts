import { Injectable } from '@angular/core';
import { AuthService } from './../login/auth.service';
import { Observable } from 'rxjs/Rx';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router, Route, CanLoad } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(

      route : ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    console.log('AuthGuard');

     return this.verificarAcesso();

  }
      private verificarAcesso(){

         if(this.authService.usuarioEstaAutenticado()){
        return true;
      }
      this.router.navigate(['/login']);
      return false;

      }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: verificando se o usuário pode carregar o código do módulo');
      return this.verificarAcesso();
    }

}
