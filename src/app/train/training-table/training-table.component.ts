import { Component, OnInit } from '@angular/core';
import {Exercice} from '../exerccice.model';
import {MatTableDataSource} from '@angular/material';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-training-table',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.css']
})
export class TrainingTableComponent implements OnInit {
  datasource = new MatTableDataSource<Exercice>();
  constructor(private trainingService: TrainingService) { }
  displayedColumns=['id','name','duration','calories'];
  ngOnInit() {
    this.datasource.data = this.trainingService.getExercices();

  }

}
