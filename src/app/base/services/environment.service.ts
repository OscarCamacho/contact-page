import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  public getValue<T>( key: string ): Observable<T> {
    return of(environment[key]);
  }

}
