import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { EstudanteFormComponent } from './estudante-form/estudante-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    EstudanteFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
