import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';
import { ApiService } from './api.service';
import { LoadingService } from './loading.service';

const API_RESOURCE = environment.skillsEndpoint;

@Injectable({
  providedIn: 'root',
})
export class SkillService extends ApiService<Skill> {
  constructor(override readonly httpClient: HttpClient,
    override readonly loadingService: LoadingService) {
    super(httpClient, loadingService);
  }

  get skills(): Observable<Skill[]> {
    return this.getResourceArrayFromApi(API_RESOURCE);
  }
}
