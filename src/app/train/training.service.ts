import {Injectable} from '@angular/core';
import {Exercice} from './exerccice.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TrainingService {
  availableExercices: Exercice[] = [
    {id: 'crunches1', name: 'Crunches1' , pathImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , description : 'description1', duration: 30 , calories: 9 },
    {id: 'crunches2', name: 'Crunches2' , pathImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , description : 'description1', duration: 30 , calories: 9 },
    {id: 'crunches3', name: 'Crunches3' , pathImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , description : 'description1' , duration: 30 , calories: 9 },
    {id: 'crunches4', name: 'Crunches4' , pathImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , description : 'description1' , duration: 30 , calories: 9 },
    {id: 'crunches5', name: 'Crunches5' , pathImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , description : 'description1', duration: 30 , calories: 9 },
    {id: 'crunches6', name: 'Crunches6' , pathImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , description : 'description1', duration: 30 , calories: 9 },
    {id: 'crunches7', name: 'Crunches7' , pathImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , description : 'description1' , duration: 30 , calories: 9 },
    {id: 'crunches8', name: 'Crunches8' , pathImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , description : 'description1' , duration: 30 , calories: 9 }
    ];

  getExercices() {
    return this.availableExercices;
  }



  addTraining(exercice) {
    this.availableExercices.push(exercice);
  }
  update(exercice: Exercice) {

    const objIndex = this.availableExercices.findIndex((obj => obj.id === exercice.id));
    this.availableExercices[objIndex] = exercice;
  }

  delete(exercice: Exercice ) {

    const objIndex = this.availableExercices.findIndex((obj => obj.id === exercice.id));
    this.availableExercices.splice(objIndex, 1 );
    console.log(this.availableExercices);

  }

}
