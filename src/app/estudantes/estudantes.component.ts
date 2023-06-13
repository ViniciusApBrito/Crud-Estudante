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
  Estudante: Estudante = {} as Estudante;
  isEditing: boolean = false;

  constructor(private EstudanteService: EstudanteService) { }
  ngOnInit(): void {
    this.loadEstudantes();
  }

  loadEstudantes() {
    this.EstudanteService.getEstudantes().subscribe({
      next: (data) => (this.Estudantes = data),
    });
  }

  OnSaveEvent(estudante: Estudante) {
    if (this.isEditing) {
      this.EstudanteService.edit(estudante).subscribe({
        next: () => {
          this.loadEstudantes();
          this.isEditing = false;
        }
      })
    }
    else {
      this.EstudanteService.save(estudante).subscribe(
        {
          next: data => {
            this.Estudantes.push(data);
          }
        })
    }
  }


  edit(estudante: Estudante) {
    this.Estudante = estudante;
    this.isEditing = true;
  }

  delete(Estudante: Estudante) {
    this.EstudanteService.delete(Estudante).subscribe({
      next: () => this.loadEstudantes()
    })
  }
}
