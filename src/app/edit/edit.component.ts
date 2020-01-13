import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomNumberValidator } from '../shared/validators/CustomNumberValidator';
import { ActivatedRoute } from '@angular/router';
import { Exercise } from '../shared/model/exercise.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public formGroup: FormGroup;
  public exercise: Exercise;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(response => {
      this.exercise = response.exercise;
      this.buildForm();
    });
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      name: [this.exercise.name, Validators.required],
      weight: [this.exercise.weight, [Validators.required, CustomNumberValidator.decimal]],
      reps: [this.exercise.reps, [Validators.required, CustomNumberValidator.numeric]],
      series: [this.exercise.series, [Validators.required, CustomNumberValidator.numeric]],
      lastIncrease: [this.exercise.lastIncrease, Validators.required]
    });
  }

}
