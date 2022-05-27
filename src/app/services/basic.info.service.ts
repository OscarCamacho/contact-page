import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicInfo } from '../model/basic.info';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class BasicInfoService extends ApiService<BasicInfo> {
  constructor(override readonly httpClient: HttpClient) {
    super(httpClient);
  }

  get basicInfo(): Observable<BasicInfo> {
    return this.getResourceFromApi('basic-info');
  }
}
