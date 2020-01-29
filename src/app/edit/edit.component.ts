import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Exercise } from '../shared/model/exercise.model';
import { DatePipe } from '@angular/common';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material';
import { Set } from '../shared/model/set.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public formGroup: FormGroup;
  public exercise: Exercise;
  private showAddSet: boolean;
  private editSet: Set;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private apiService: ApiService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.data.subscribe(response => {
      this.exercise = response.exercise;
      this.buildForm();
    });
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      id: [this.exercise.id],
      name: [this.exercise.name, Validators.required],
      lastIncrease: [this.exercise.lastIncrease, Validators.required],
      sets: [this.exercise.sets]
    });
  }

  update(){
    const exercise =  <Exercise>this.formGroup.value;
    exercise.lastIncrease = this.datePipe.transform(exercise.lastIncrease, 'dd/MM/yyyy');
    this.apiService.putExercise(exercise).subscribe(() => {
      this.router.navigate(['home']).then((navigated: boolean) => {
        if(navigated){
          this.snackBar.open("Actualizado correctamente", "Aceptar", {duration: 2000});
        };
      });
    }, err => {
      console.log(err.me);
    });
  }

  saveSet(set: Set){
    if(set != null){
      if(set.id == null){
        this.exercise.sets.push(set);
      }else{
        let itemIndex = this.exercise.sets.findIndex(item => item.id == set.id);
        this.exercise.sets[itemIndex] = set;
      }
    }
    this.showAddSet = false;
  }


  callEditComponent(set:Set){
    this.editSet = set;
    this.showAddSet = true;
  }

}
