

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Exercice} from '../../train/exerccice.model';
import {EditExerciceComponent} from '../../train/edit-exercice/edit-exercice.component';
import {TrainingService} from '../../train/training.service';
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  exercices: Exercice[] = [];
  exerciceEdit: Exercice = null;
  mode : boolean;
  dialogRef: MatDialogRef<EditExerciceComponent>;
  constructor(private trainingService: TrainingService, private dialog: MatDialog) { }

  ngOnInit() {
    this.exercices = this.trainingService.getExercices();
  }


  editExercice(exercice: Exercice) {
    this.mode = true;
    this.exerciceEdit = {... exercice};
    const dialogRef = this.dialog.open(EditExerciceComponent, {data: {mode : this.mode , exercice : this.exerciceEdit} });
    dialogRef.afterClosed().subscribe( data =>
      {
        this.trainingService.update(data);
      }
    );
  }
  deleteExercice(exercice: Exercice) {
    this.mode = false;
    this.exerciceEdit = {... exercice};
    const dialogRef = this.dialog.open(EditExerciceComponent, {data: {mode : this.mode , exercice : exercice} });
    dialogRef.afterClosed().subscribe( data =>
      {
        this.trainingService.delete(data);

      }
    );
  }
}
