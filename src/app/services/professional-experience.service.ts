import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProfessionalExperience } from '../model/professional.experience';
import { ApiService } from './api.service';

const RESOURCE_NAME = environment.professionalExperienceResource;

@Injectable({
  providedIn: 'root',
})
export class ProfessionalExperienceService extends ApiService<ProfessionalExperience> {
  constructor(override readonly httpClient: HttpClient) {
    super(httpClient);
  }

  get experiences(): Observable<ProfessionalExperience[]> {
    return this.getResourceArrayFromApi(RESOURCE_NAME);
  }
}
