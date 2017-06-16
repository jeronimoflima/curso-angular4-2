import { CampoControlComponent } from './campo-control/campo-control.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlComponent
  ],
  exports:[
     FormDebugComponent,
     CampoControlComponent
  ]
})
export class SharedModule { }
