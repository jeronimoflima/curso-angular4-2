import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule

  ],
  declarations: [
    TemplateFormComponent

  ]
})
export class TemplateFormModule { }
