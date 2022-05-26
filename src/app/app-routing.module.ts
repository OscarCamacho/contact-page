import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SkillComponent } from './components/skill/skill.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: BasicInfoComponent},
  {path: 'skills', component: SkillComponent},
  {path: 'experiences', component: ExperiencesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
