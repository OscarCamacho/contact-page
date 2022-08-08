import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, EMPTY, map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoadingService } from './loading.service';

export abstract class ApiService<T> {
  private readonly API_ENDPOINT: string = environment.apiEndpoint;

  constructor(readonly httpClient: HttpClient, 
    readonly loadingService: LoadingService) {}

  protected getResourceFromApi(resource: string): Observable<T> {
    return this.manageLoadingState(this.httpClient
      .get<T>(`${this.API_ENDPOINT}/${resource}`)
      .pipe(shareReplay(100), catchError(error => this.manageLoadingStateError(error))));
  }

  protected getResourceArrayFromApi(resource: string): Observable<T[]> {
    return this.manageLoadingState(this.httpClient
      .get<T[]>(`${this.API_ENDPOINT}/${resource}`)
      .pipe(shareReplay(100), catchError(error => this.manageLoadingStateError(error))));
  }

  protected getGenericResourceFromApi<V>(resource: string) {
    return this.manageLoadingState(this.httpClient
      .get<V>(`${this.API_ENDPOINT}/${resource}`)
      .pipe(shareReplay(100), catchError(error => this.manageLoadingStateError(error))));
  }

  private manageLoadingState<V>(obs: Observable<V>): Observable<V> {
    this.loadingService.isLoading$.next(true);
    obs.subscribe(_ => this.loadingService.isLoading$.next(false));
    return obs;
  }

  private manageLoadingStateError (error: HttpErrorResponse) {
    this.loadingService.isLoading$.next(false);
    this.loadingService.reportError(error);
    return EMPTY;
  }

}
