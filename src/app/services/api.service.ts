import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class ApiService<T> {

  private readonly API_ENDPOINT: String = environment.apiEndpoint;

  constructor(readonly httpClient: HttpClient) {}

  protected getResourceFromApi (resource: String): Observable<T> {
    return this.httpClient.get<T>(`${this.API_ENDPOINT}/${resource}`)
      .pipe(shareReplay());
  }

  protected getResourceArrayFromApi (resource: String): Observable<T[]> {
    return this.httpClient.get<T[]>(`${this.API_ENDPOINT}/${resource}`)
      .pipe(shareReplay());
  }

  protected getGenericResourceFromApi <V> (resource: String) {
    return this.httpClient.get<V>(`${this.API_ENDPOINT}/${resource}`)
      .pipe(shareReplay());
  }

}
