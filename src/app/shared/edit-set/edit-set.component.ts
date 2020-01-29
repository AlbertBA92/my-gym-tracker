import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Set } from '../model/set.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { CustomNumberValidator } from '../validators/CustomNumberValidator';
import { Exercise } from '../model/exercise.model';

@Component({
  selector: 'app-edit-set',
  templateUrl: './edit-set.component.html',
  styleUrls: ['./edit-set.component.css']
})
export class EditSetComponent implements OnInit {

  public formGroup: FormGroup;
  @Input() set: Set;
  @Input() exercise: Exercise;
  @Input() isNew: boolean;
  @Output() save = new EventEmitter<Set>();

  constructor(
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    if(this.set != null){
      this.buildEditForm();
    }else{
      this.buildNewForm();
    }
  }

  buildEditForm(){
    this.formGroup = this.formBuilder.group({
      id: [this.set.id],
      weight: [this.set.weight, [Validators.required, CustomNumberValidator.decimal]],
      reps: [this.set.reps, [Validators.required, CustomNumberValidator.numeric]],
    });
  }

  buildNewForm(){
    this.formGroup = this.formBuilder.group({
      weight: ['', [Validators.required, CustomNumberValidator.decimal]],
      reps: ['', [Validators.required, CustomNumberValidator.numeric]],
    });
  }

  saveData(){
    this.save.emit(<Set>this.formGroup.value);
  }

  cancel(){
    this.save.emit(null);
  }

}
