import { Component, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Exercise } from '../shared/model/exercise.model';
import { ApiService } from  '../services/api.service';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent {

  constructor(
    private apiService: ApiService, 
    private dialogRef: MatDialogRef<DialogBodyComponent>, 
    public snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: Exercise) {}

  close() {
    this.dialogRef.close();
  }

  remove(id: string) {
    this.apiService.deleteExercise(id).subscribe(() =>{
      this.close();
      this.snackBar.open("Actualizado correctamente", "Aceptar", {duration: 2000});
    },
    err => {
      alert(err.message);
    });
  }

}
