import { IFormCanDeactive } from './../../guards/Iform-candeactivate';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCanDeactive {
aluno: any;
inscricao: Subscription;
private formMudou: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if(this.aluno == null){
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroid(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMudou = true;

  }

  podeMudarRota(){

    if(this.formMudou){
      confirm('Tem certeza que deseja sair?');
    }
    return true;
  }

  podeDesativar(){
      return this.podeMudarRota();
  }

}
