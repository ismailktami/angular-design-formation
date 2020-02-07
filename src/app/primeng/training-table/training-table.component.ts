import { Component, OnInit } from '@angular/core';
import {Exercice} from '../../train/exerccice.model';
import {MatDialog, MatDialogRef} from '@angular/material';
import {EditExerciceComponent} from '../../train/edit-exercice/edit-exercice.component';
import {TrainingService} from '../../train/training.service';

@Component({
  selector: 'app-training-table',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.css']
})
export class TrainingTableComponent implements OnInit {

  exercices: Exercice[] = [];
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercices = this.trainingService.getExercices();
  }
}
