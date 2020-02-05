import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {Exercice} from '../exerccice.model';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TrainingService} from '../training.service';

@Component({
  selector: 'app-training-table',
  templateUrl: './training-table.component.html',
  styleUrls: ['./training-table.component.css']
})
export class TrainingTableComponent implements OnInit , AfterViewInit {
  datasource = new MatTableDataSource<Exercice>();
  @ViewChild(MatSort,{ static: false }) sort: MatSort;
  @ViewChild(MatPaginator,{ static: false }) paginator: MatPaginator;
  constructor(private trainingService: TrainingService) { }
  displayedColumns=['id','name','duration','calories'];
  ngOnInit() {
    this.datasource.data = this.trainingService.getExercices();
  }
  ngAfterViewInit(): void {
    this.datasource.sort=this.sort;
    this.datasource.paginator= this.paginator;
  }
  doFilter(filterValue: string ) {
    this.datasource.filter=filterValue.trim().toLowerCase();
  }
}
