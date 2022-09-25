import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BasicInfo } from '../model/basic.info';
import { ApiService } from './api.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class BasicInfoService extends ApiService<BasicInfo> {
  constructor(override readonly httpClient: HttpClient, 
    override readonly loadingService: LoadingService) {
    super(httpClient, loadingService);
  }

  get basicInfo(): Observable<BasicInfo> {
    return this.getResourceFromApi(environment.basicInfoResource);
  }
}
