import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Exercise } from './shared/model/exercise.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'https://exercises-db.herokuapp.com/';
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

  public postExcersie(exercise: Exercise): Observable<any>  {
    return this.httpClient.post(this.SERVER_URL + this.EXERCISES_URL, JSON.stringify(exercise), {
      headers:  { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       }
    });
  }

  public deleteExercise(id: string): Observable<any>   {
    return this.httpClient.delete(this.SERVER_URL + this.EXERCISES_URL + "/"+id);
  }
}
