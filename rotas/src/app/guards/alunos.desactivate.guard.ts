import { IFormCanDeactive } from './Iform-candeactivate';
import { Injectable } from '@angular/core';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';
import { Observable } from 'rxjs/Rx';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable()
export class AlunosDesactivateGuard implements CanDeactivate<IFormCanDeactive> {


  canDeactivate(
    component: IFormCanDeactive,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {

    console.log('guarda de desativação');
   // return component.podeMudarRota();
   return component.podeDesativar();
  }
}
