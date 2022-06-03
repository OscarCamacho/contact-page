import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { SkillComponent } from './components/skill/skill.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ExperienceDatePipe } from './utils/experience-date.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BasicInfoComponent,
    SkillComponent,
    ExperiencesComponent,
    ExperienceDatePipe,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
