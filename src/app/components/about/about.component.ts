import { Component, OnInit } from '@angular/core';
import { AppSections, NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  readonly display$ = this.navService.getDisplayObservable(AppSections.ABOUT);

  constructor(private readonly navService: NavigationService) {}

}
