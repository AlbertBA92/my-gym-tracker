import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class ResolveEditSetService implements Resolve<any> {

    constructor(private apiService: ApiService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const setId = route.params['id'];
        return this.apiService.getSetById(setId);
    }

}