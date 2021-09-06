import { Component, OnInit } from '@angular/core';
import { AppSections, NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  readonly display$ = this.navService.getDisplayObservable(AppSections.EXPERIENCE);

  constructor(private readonly navService: NavigationService) {}

}
