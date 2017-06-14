import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Aluno } from './../aluno';
@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {
  aluno: Aluno;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
   /* this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);
      }
    );*/
      console.log('ngOnInit: AlunoDetalheComponent');

    this.inscricao = this.route.data.subscribe(
      (info: {aluno: Aluno})=>{
        console.log('Recebendo objeto: Aluno do Resolver');
        this.aluno = info.aluno;
      }
    );

  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);

  }

  ngOnDestroid(){
    this.inscricao.unsubscribe();
  }

}
