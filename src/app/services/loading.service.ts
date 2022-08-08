import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { ErrorInfo } from '../model/error.info';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  readonly isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly errors$: BehaviorSubject<ErrorInfo[]> = new BehaviorSubject<ErrorInfo[]>([]);
  readonly errorsReported$: Observable<boolean> = this.errors$
    .pipe(map(errors => errors.length > 0 || false));

  reportError(errorInfo: ErrorInfo) {
    const currentErrorArray = this.errors$.value;
    currentErrorArray.push(errorInfo);
    this.errors$.next(currentErrorArray);
  }
}
