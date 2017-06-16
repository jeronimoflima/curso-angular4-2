
import { TemplateFormModule } from './template-form/template-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    TemplateFormModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
