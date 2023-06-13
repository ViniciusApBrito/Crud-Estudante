import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estudante } from '../estudante';

@Component({
  selector: 'app-estudante-form',
  templateUrl: './estudante-form.component.html',
  styleUrls: ['./estudante-form.component.css']
})
export class EstudanteFormComponent implements OnChanges {
  @Input() estudante: Estudante = {} as Estudante;
  @Output() saveEvent = new EventEmitter<Estudante>();
  formGroupEstudante: FormGroup;
  submitted: boolean = false;
  @Output() cleanEvent = new EventEmitter<void>();
  

  
  constructor(private formsBuilder: FormBuilder) {
    this.formGroupEstudante = formsBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.min(14)]],
    });
  }
  
  
  
  ngOnChanges(changes: SimpleChanges): void {
    this.formGroupEstudante.setValue(this.estudante);
  }
  save() {
    this.submitted = true;
    if (this.formGroupEstudante.valid) {
      this.saveEvent.emit(this.formGroupEstudante.value); // avista o componente pai que está tudo certo passando o estudante 
      this.formGroupEstudante.reset();//limpa o formulário 
      this.submitted = false;
    }
  }
  clean() {
    this.cleanEvent.emit();
    this.formGroupEstudante.reset();
    this.submitted = false;

  }
  get name(): any {
    return this.formGroupEstudante.get('name');
  }

  get email(): any {
    return this.formGroupEstudante.get('email');
  }

  get cpf(): any {
    return this.formGroupEstudante.get('cpf');
  }

  get location(): any {
    return this.formGroupEstudante.get('location');
  } 
}
