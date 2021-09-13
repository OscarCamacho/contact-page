import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { contactService } from 'src/app/services/contact.service';
import { AppSections, NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  readonly contactList$ = this.contactService.getContactList();

  readonly display$ = this.navService.getDisplayObservable(AppSections.CONTACT_INFO);

  constructor(private readonly navService: NavigationService,
    private readonly contactService: contactService) {}

}
