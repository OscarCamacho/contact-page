import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfessionalExperience } from 'src/app/model/professional.experience';
import { ProfessionalExperienceService } from 'src/app/services/professional-experience.service';

@Component({
  selector: 'experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {

  readonly experiences$: Observable<ProfessionalExperience[]> =
    this.experiencesService.experiences;

  constructor(private readonly experiencesService: ProfessionalExperienceService) {}

}
