import { Component, OnInit } from '@angular/core';
import {Exercice} from '../../train/exerccice.model';
import {TrainingService} from '../../train/training.service';

@Component({
  selector: 'app-training-table-primeng',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.css']
})
export class TrainingTablePrimeNgComponent implements OnInit {

  exercices: Exercice[] = [];
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercices = this.trainingService.getExercices();
  }
}
