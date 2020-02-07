import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-training-antng',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingAngComponent implements OnInit {

  selected = new FormControl(0);
  constructor() { }
  ngOnInit() {

  }

  addTraining() {
    this.selected=new FormControl(0);
  }

}
