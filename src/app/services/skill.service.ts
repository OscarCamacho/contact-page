import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';
import { ApiService } from './api.service';

const API_RESOURCE = environment.skillsEndpoint;

@Injectable({
  providedIn: 'root'
})
export class SkillService extends ApiService<Skill> {

  constructor(override readonly httpClient: HttpClient) {
    super(httpClient);
  }

  get skills (): Observable<Skill[]> {
    return this.getResourceArrayFromApi(API_RESOURCE);
  }

}
