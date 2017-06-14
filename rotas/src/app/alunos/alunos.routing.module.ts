import { AlunosDesactivateGuard } from './../guards/alunos.desactivate.guard';
import { AlunosGuard } from './../guards/alunos.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, CanActivateChild, CanDeactivate } from '@angular/router';
import { NgModule } from '@angular/core';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
  {path: '', component: AlunosComponent,
  CanActivateChild: [AlunosGuard],
   children : [
    {path: 'novo', component: AlunoFormComponent},
    {path: ':id', component: AlunoDetalheComponent,
        resolve: { aluno: AlunoDetalheResolver }
    },
    {path: ':id/editar', component: AlunoFormComponent,
      canDeactivate: [AlunosDesactivateGuard]
    }
  ]},
];
@NgModule({
  imports:[
    RouterModule.forChild(alunosRoutes)
  ],
  exports:[
    RouterModule
  ]


})
export class AlunosRoutingModule {}
