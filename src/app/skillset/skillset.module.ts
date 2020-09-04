import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkillsetRoutingModule} from './skillset-routing.module';
import {BaseModule} from '../base/base.module';
import {SkillListComponent} from './components/skill-list/skill-list.component';
import {SkillDetailComponent} from './components/skill-detail/skill-detail.component';
import {SkillScreenComponent} from './components/skill-screen/skill-screen.component';

@NgModule({
    declarations: [
        SkillListComponent,
        SkillDetailComponent,
        SkillScreenComponent,
    ],
    imports: [CommonModule, SkillsetRoutingModule, BaseModule],
})
export class SkillsetModule {}
