import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
//import { CursosModule }  from './cursos/cursos.module';
//import { AlunosModule } from './alunos/alunos.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    //CursosModule,
   // AlunosModule,
    AppRoutingModule
    //routing
  ],
  providers:[
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
