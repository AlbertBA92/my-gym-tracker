import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Exercise } from './shared/model/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:3000/';
  private EXERCISES_URL = "excercises";
  constructor(private httpClient: HttpClient) { }

  public first: string = "";

  handleError(error: Error) {
    alert(error.message);
    throwError(error);
  }
  

  public getExercises() {
    return this.httpClient.get(this.SERVER_URL + this.EXERCISES_URL);
  }

  public postExcersie(exercise: Exercise) {
    console.log(JSON.stringify(exercise));      
    this.httpClient.post(this.SERVER_URL + this.EXERCISES_URL, JSON.stringify(exercise), {
      headers:  { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).subscribe(data => {
      return data;
    },
      err => {
        this.handleError(err);
    });
  }

  public deleteExercise(id: string){
    this.httpClient.delete(this.SERVER_URL + this.EXERCISES_URL + "/"+id).subscribe(data => {
      return data;
    },
      err => {
        this.handleError(err);
      });
  }
}
