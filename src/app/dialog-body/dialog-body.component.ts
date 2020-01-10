import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exercise } from '../shared/model/exercise.model';
import { ApiService } from  '../api.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent {

  constructor(private apiService: ApiService, public dialogRef: MatDialogRef<DialogBodyComponent>, @Inject(MAT_DIALOG_DATA) public data: Exercise) {}

  close() {
    this.dialogRef.close();
  }

  remove(id: string) {
    this.apiService.deleteExercise(id).subscribe(() =>{
      this.close();
    },
    err => {
      alert(err.message);
    });
  }

}
