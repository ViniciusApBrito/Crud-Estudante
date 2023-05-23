import { EstudanteService } from '../estudantes.service';

import { Component, OnInit } from '@angular/core';

import { Estudante } from '../estudante';

import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-estudantes',

  templateUrl: './estudantes.component.html',

  styleUrls: ['./estudantes.component.css'],
})
export class EstudantesComponent implements OnInit {
  Estudantes: Estudante[] = [];
  isEditing: boolean = false;

  submitted: boolean = false;


  formGroupEstudante: FormGroup;

  constructor(private EstudanteService: EstudanteService, private formsBuilder: FormBuilder) {
    this.formGroupEstudante = formsBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.min(14)]],
    });
  }

  ngOnInit(): void {
    this.loadEstudantes();
  }

  loadEstudantes() {
    this.EstudanteService.getEstudantes().subscribe({
      next: (data) => (this.Estudantes = data),
    });
  }

  save() {
    this.submitted = true;
    if (this.formGroupEstudante.valid) {
      if (this.isEditing) {
        this.EstudanteService.edit(this.formGroupEstudante.value).subscribe({
          next: () => {
            this.loadEstudantes();
            this.formGroupEstudante.reset();
            this.isEditing = false;
            this.submitted = false;
          }
        })
      }
      else {
        this.EstudanteService.save(this.formGroupEstudante.value).subscribe(
          {
            next: data => {
              this.Estudantes.push(data);
              this.formGroupEstudante.reset();
              this.submitted = false;
            }
          })
      }
    }
  }

  edit(Estudante: Estudante) {
    this.formGroupEstudante.setValue(Estudante);
    this.isEditing = true;
  }

  delete(Estudante: Estudante) {
    this.EstudanteService.delete(Estudante).subscribe({

      next: () => this.loadEstudantes()
    })
  }

  clean() {
    this.formGroupEstudante.reset();
    this.isEditing = false;
  }
  get name(): any {
    return this.formGroupEstudante.get("name");
  }
  get email(): any {
    return this.formGroupEstudante.get("email");
  }
  get cpf(): any {
    return this.formGroupEstudante.get("cpf");
  }
  get location(): any {
    return this.formGroupEstudante.get("location")
  }
}

