import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {ContactscreenComponent} from './components/contactscreen/contactscreen.component';
import {BaseModule} from '../base/base.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [ContactscreenComponent],
    imports: [
        CommonModule,
        ContactRoutingModule,
        BaseModule,
        FontAwesomeModule,
    ],
})
export class ContactModule {}
