import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SkillScreenComponent} from './components/skill-screen/skill-screen.component';
import {SkillDetailComponent} from './components/skill-detail/skill-detail.component';
import {SkillListComponent} from './components/skill-list/skill-list.component';

const routes: Routes = [
    {
        path: 'skill',
        component: SkillScreenComponent,
        children: [
            {path: 'list', component: SkillListComponent},
            {path: 'detail/:name', component: SkillDetailComponent},
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SkillsetRoutingModule {}
