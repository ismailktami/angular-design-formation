import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Exercice} from '../../train/exerccice.model';
import {EditExerciceComponent} from '../../train/edit-exercice/edit-exercice.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  sortName: string | null = null;
  sortValue: string | null = null;
  searchValue = '';

  listOfSearchName: string[] = [];
  date = null;
  dateRange = [];
  isEnglish = false;
  exercices: Exercice[]=null;
  mode : boolean;
  exerciceEdit : Exercice =null;
  dialogRef: MatDialogRef<EditExerciceComponent>;
  constructor() {
  }
  ngOnInit(): void {
  }







}


