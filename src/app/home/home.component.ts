import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Exercise } from '../shared/model/exercise.model';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  exercises: Exercise[];
  constructor(private apiService: ApiService, private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.getAllExercises();
  }

  getAllExercises(){
    this.apiService.getExercises().subscribe((data: Exercise[]) => {
      this.exercises = data;
    });
  }

  openDialog(exercise: Exercise){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = exercise;
    this.matDialog.open(DialogBodyComponent, dialogConfig).afterClosed().subscribe(() => this.getAllExercises());
  }

}
