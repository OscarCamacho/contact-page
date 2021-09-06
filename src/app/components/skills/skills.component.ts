import { Component, OnInit } from '@angular/core';
import { AppSections, NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  readonly display$ = this.navService.getDisplayObservable(AppSections.SKILLS);

  constructor(private readonly navService: NavigationService) {}

}
