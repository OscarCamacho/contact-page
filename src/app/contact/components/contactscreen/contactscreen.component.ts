import {Component, OnInit} from '@angular/core';
import {EnvironmentService} from 'src/app/base/services/environment.service';
import {faPaperPlane, faPray} from '@fortawesome/free-solid-svg-icons';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
    templateUrl: './contactscreen.component.html',
    styleUrls: ['./contactscreen.component.css'],
})
export class ContactscreenComponent implements OnInit {
    sendIcon = faPaperPlane;
    private contactMail: string;

    contactForm = new FormGroup({
        name: new FormControl(''),
        subject: new FormControl(''),
        email: new FormControl(''),
        message: new FormControl(''),
    });

    constructor(private environmentService: EnvironmentService) {}

    ngOnInit(): void {
        this.environmentService
            .getValue('contactMail')
            .subscribe((res: string) => {
                this.contactMail = res;
            });
    }

    get _contactMail(): string {
        return this.contactMail;
    }

    sendContactRequest(): void {
        console.log('sendContactRequest', {form: this.contactForm.value});
        alert('This functionality is not yet implemented');
    }
}
