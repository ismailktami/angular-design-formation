import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Exercice} from '../exerccice.model';

@Component({
  selector: 'app-edit-exercice-material',
  templateUrl: './edit-exercice.component.html',
  styleUrls: ['./edit-exercice.component.css']
})
export class EditExerciceComponent implements OnInit {
  exrcice: Exercice;
  lastversion: Exercice;
  updateMode: boolean;
  deleteMode: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<EditExerciceComponent>,
  ) { }

  ngOnInit() {

    if( this.data.mode) {
      this.updateMode = true;
      this.deleteMode = false;
    }
    else{
      this.deleteMode = true;
      this.updateMode=false;
    }
    this.exrcice = {...this.data.exercice} ;
    this.lastversion = {...this.data.exercice} ;
  }

  save(){
    this.dialogRef.close(this.exrcice);

  }


  delete(){
      this.dialogRef.close(this.lastversion);
  }

  cancel(){
    this.dialogRef.close();
  }

}
