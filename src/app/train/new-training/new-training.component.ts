import {Component, Input, OnInit} from '@angular/core';
import {TrainingService} from '../training.service';

import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-training-material',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() exerciceAdded = new EventEmitter<string>();
  @Input()  ngform: NgForm;
  constructor(private trainingService: TrainingService, private router: Router) { }
  ngOnInit() {
  }
  add(form: NgForm) {
        this.trainingService.addTraining(form.value);
        this.exerciceAdded.emit(form.value.name);
  }

}
