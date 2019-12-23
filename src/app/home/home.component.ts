import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Exercise } from '../shared/model/exercise.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  exercises: Exercise[];
  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.apiService.getExercises().subscribe((data: Exercise[]) => {
      this.exercises = data;
    });
  }

  public remove(id: string) { 
    console.log(id);
    this.apiService.deleteExercise(id);
  }

}
