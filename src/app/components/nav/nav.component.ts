import { Component, OnInit } from '@angular/core';
import { AppSections, NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  Sections = AppSections;

  constructor(private readonly navService: NavigationService) {}

  navigate (section: AppSections): void {
    this.navService.displaySection(section)
  }

}
