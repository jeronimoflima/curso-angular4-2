import { Aluno } from './aluno';
import { Injectable } from '@angular/core';


@Injectable()
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Caio', email: 'caio@emaol.com'},
    {id: 2, nome: 'João', email: 'jon@emaol.com'},
    {id: 3, nome: 'Maria', email: 'mari@emaol.com'}
  ];

  getAlunos(){
    return this.alunos;

  }

  getAluno(id: number){
    for(let i=0; i < this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }

}
