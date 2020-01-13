import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ResolveEditExerciseService implements Resolve<any> {

    constructor(private apiService: ApiService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const exerciseId = route.params['id'];
        return this.apiService.getExerciseById(exerciseId);
    }

}