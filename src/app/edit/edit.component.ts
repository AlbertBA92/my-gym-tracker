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

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.buildForm();
    this.route.data.subscribe(response => {
      this.exercise = response.exercise;
    });
    // this.route.params.subscribe(params => {
    //   this.apiService.getExerciseById(Number.parseInt(params['id'])).subscribe((data: Exercise) => {
    //     this.exercise = data;
    //   });
    // });

  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      weight: ['', [Validators.required, CustomNumberValidator.decimal]],
      reps: ['', [Validators.required, CustomNumberValidator.numeric]],
      series: ['', [Validators.required, CustomNumberValidator.numeric]],
      lastIncrease: ['', Validators.required]
    });
  }

}
