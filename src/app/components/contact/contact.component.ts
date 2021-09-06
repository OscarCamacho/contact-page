import { Component, OnInit } from '@angular/core';
import { AppSections, NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  readonly display$ = this.navService.getDisplayObservable(AppSections.CONTACT_INFO);

  constructor(private readonly navService: NavigationService) {}

}
