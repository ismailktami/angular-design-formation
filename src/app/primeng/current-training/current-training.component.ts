import { Component, OnInit } from '@angular/core';
import {Exercice} from '../../train/exerccice.model';
import {MatDialog, MatDialogRef} from '@angular/material';
import {EditExerciceComponent} from '../../train/edit-exercice/edit-exercice.component';
import {TrainingService} from '../../train/training.service';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

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
