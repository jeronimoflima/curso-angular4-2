import { CursosRoutingModule } from './cursos.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { RouterModule } from '@angular/router';


import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
   // RouterModule


  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent

  ],
  providers: [CursosService],

})

export class CursosModule { }
