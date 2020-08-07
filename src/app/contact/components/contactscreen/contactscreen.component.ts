import {Component, OnInit} from '@angular/core';
import {EnvironmentService} from 'src/app/base/services/environment.service';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

@Component({
    templateUrl: './contactscreen.component.html',
    styleUrls: ['./contactscreen.component.css'],
})
export class ContactscreenComponent implements OnInit {
    sendIcon = faPaperPlane;
    private contactMail: string;

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
}
