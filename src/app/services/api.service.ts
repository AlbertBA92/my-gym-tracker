import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { Exercise } from '../shared/model/exercise.model';
import { Set } from '../shared/model/set.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private SERVER_URL = 'http://localhost:8080/gym-tracker-api/';
  // private EXERCISES_URL = "exercise";
  private SERVER_URL = 'https://gym-tracker-bff.herokuapp.com/gym-tracker-api/';
  private EXERCISES_URL = "exercise";
  private SET_URL = "set";
  
  constructor(private httpClient: HttpClient) { }

  public first: string = "";

  handleError(error: Error) {
    alert(error.message);
    throwError(error);
  }
  

  // EXERCISE SERVICES

  public getExercises() {
    return this.httpClient.get(this.SERVER_URL + this.EXERCISES_URL, {
      headers:  { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
       }
    });
  }

  public postExcersie(exercise: Exercise): Observable<any>  {
    return this.httpClient.post(this.SERVER_URL + this.EXERCISES_URL, JSON.stringify(exercise), {
      headers:  { 
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
       }
    });
  }

  public putExercise(exercise: Exercise): Observable<any> {
    console.log(exercise);
    return this.httpClient.put(this.SERVER_URL + this.EXERCISES_URL + "/" + exercise.id, JSON.stringify(exercise), {
      headers:  { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       }
    });
  }

  public deleteExercise(id: string): Observable<any>   {
    return this.httpClient.delete(this.SERVER_URL + this.EXERCISES_URL + "/"+id);
  }

  public getExerciseById(id: string) {
    return this.httpClient.get(this.SERVER_URL + this.EXERCISES_URL + "/" + id, {responseType:'json'});
  }


  // SET SERVICES
  public getSetById(id: string) {
    return this.httpClient.get(this.SERVER_URL + this.SET_URL + "/" + id, {responseType:'json'});
  }

  public putSet(set: Set): Observable<any> {
    return this.httpClient.put(this.SERVER_URL + this.SET_URL + "/" + set.id, JSON.stringify(set), {
      headers:  { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       }
    });
  }

}
