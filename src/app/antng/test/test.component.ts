import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Exercice} from '../../train/exerccice.model';
import {EditExerciceComponent} from '../../train/edit-exercice/edit-exercice.component';
import {en_US, NzI18nService, zh_CN} from 'ng-zorro-antd';
import {TrainingService} from '../../train/training.service';
import {getISOWeek} from 'date-fns';

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
  constructor(private i18n: NzI18nService,private trainingService: TrainingService,private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.changeLanguage();
    this.exercices=this.trainingService.getExercices();
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
  editExercice(exercice: Exercice) {
    console.log(exercice);
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
    console.log(exercice);
    this.mode = false;
    this.exerciceEdit = {... exercice};
    const dialogRef = this.dialog.open(EditExerciceComponent, {data: {mode : this.mode , exercice : exercice} });
    dialogRef.afterClosed().subscribe( data =>
      {
        this.trainingService.delete(data);

      }
    );
  }



  reset(): void {
    this.searchValue = '';
    this.exercices=this.trainingService.getExercices();
  }

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    this.search();
  }

  filterNameChange(value: string[]): void {
    this.listOfSearchName = value;
    this.search();
  }

  search(): void {
        const filterFunc = (item: Exercice ) => {
          return (
            (this.listOfSearchName.length
              ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1)
              : true) && item.name.indexOf(this.searchValue) !== -1
          );
        };
        const data = this.exercices.filter((item: Exercice) => filterFunc(item));

        this.exercices = data.sort((a, b) =>
          this.sortValue === 'ascend'
            ? a[this.sortName!] > b[this.sortName!]
            ? 1
            : -1
            : b[this.sortName!] > a[this.sortName!]
            ? 1
            : -1
        );


  }
}


