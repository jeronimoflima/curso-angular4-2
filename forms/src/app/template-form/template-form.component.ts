import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  }

  onSubmit(form) {
    console.log(form);
    // console.log(this.usuario);

    this.http.post('http://httpbin.org/post', JSON.stringify(form.value))
      .map(res => res)
      .subscribe(dados => console.log(dados));

  }

  constructor(private http: Http) { }

  ngOnInit() {

  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErr(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form) {

   cep = cep.replace(/\D/g, '');
    //Verifica se campo cep possui valor informado.
    if (cep != "") {
      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;
      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        this.resetaDadosForm(form);

        this.http.get(`//viacep.com.br/ws/${cep}/json`)
        .map(dados=> dados.json())
        .subscribe(dados=> this.populaDadosForm(dados, form));
      }
    }
  }
  populaDadosForm(dados, formulario){
  /*  formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email

    });*/

    formulario.form.patchValue({

        endereco: {
          rua: dados.logradouro,
          cep: dados.cep,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
    });

  }
    resetaDadosForm(formulario){
        formulario.form.patchValue({

        endereco: {
          rua: null,
          cep: null,
          complemento: null,
          bairro: null,
          cidade: null,
          estado: null
        }
    });

    }
}
