import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContactRoutingModule} from './contact-routing.module';
import {ContactscreenComponent} from './components/contactscreen/contactscreen.component';
import {BaseModule} from '../base/base.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [ContactscreenComponent],
    imports: [
        CommonModule,
        ContactRoutingModule,
        BaseModule,
        FontAwesomeModule,
        ReactiveFormsModule,
    ],
})
export class ContactModule {}
