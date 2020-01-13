import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomNumberValidator } from '../shared/validators/CustomNumberValidator';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Exercise } from '../shared/model/exercise.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  public formGroup: FormGroup;

  constructor( 
    private formBuilder: FormBuilder, 
    private apiService: ApiService, 
    private router: Router, 
    private datePipe: DatePipe ) { }

  ngOnInit() {
    this.buildForm();

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

  save(){
    const exercise =  <Exercise>this.formGroup.value;
    exercise.lastIncrease = this.datePipe.transform(exercise.lastIncrease, 'dd/MM/yyyy');
    this.apiService.postExcersie(exercise).subscribe(() => {
        this.router.navigate(['home']);
      },
      err => {
        alert(err.message);
    });
    
  }
  

}
