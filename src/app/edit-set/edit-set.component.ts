import { Component, OnInit } from '@angular/core';
import { Set } from '../shared/model/set.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material';
import { CustomNumberValidator } from '../shared/validators/CustomNumberValidator';

@Component({
  selector: 'app-edit-set',
  templateUrl: './edit-set.component.html',
  styleUrls: ['./edit-set.component.css']
})
export class EditSetComponent implements OnInit {

  public formGroup: FormGroup;
  public set: Set;
  public exerciseId: string;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private apiService: ApiService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.route.data.subscribe(response => {
      this.set = response.set;      
      this.buildForm();
    });
    this.route.queryParams.subscribe(params => {
      this.exerciseId = params['exercise_id'];
    })
  }

  buildForm(){
    this.formGroup = this.formBuilder.group({
      id: [this.set.id],
      weight: [this.set.weight, [Validators.required, CustomNumberValidator.decimal]],
      reps: [this.set.reps, [Validators.required, CustomNumberValidator.numeric]],
    });
  }

  update(){
    const set = <Set>this.formGroup.value;
    this.apiService.putSet(set).subscribe(() => {
      this.router.navigate(['/edit/', this.exerciseId]).then((navigated: boolean) => {
        if(navigated){
          this.snackBar.open("Actualizado correctamente", "Aceptar", {duration: 2000});
        };
      });
    });
  }

}
