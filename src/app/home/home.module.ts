import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomescreenComponent} from './components/homescreen/homescreen.component';
import {BaseModule} from '../base/base.module';

@NgModule({
    declarations: [HomescreenComponent],
    imports: [CommonModule, HomeRoutingModule, BaseModule],
})
export class HomeModule {}
