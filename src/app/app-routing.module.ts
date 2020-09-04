import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SkillDetailComponent} from './skillset/components/skill-detail/skill-detail.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/homescreen'},
    {path: 'homescreen', redirectTo: '/homescreen', pathMatch: 'full'},
    {path: 'skillset', redirectTo: '/skill', pathMatch: 'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
