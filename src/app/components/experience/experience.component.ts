import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ExperienceService } from 'src/app/services/experience.service';
import { AppSections, NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  readonly display$ = this.navService.getDisplayObservable(AppSections.EXPERIENCE);

  readonly experiences$ = this.experienceService.getExperiencesNames();
  readonly experienceCount$ = this.experiences$.pipe(map((xps)=>xps.length - 1));
  readonly time$ = new BehaviorSubject(0);
  readonly experience$ = this.time$.asObservable().pipe(
    switchMap((t)=>this.experienceService.getExperienceFromIndex(t)));

  constructor(private readonly navService: NavigationService,
    private readonly experienceService: ExperienceService) {}

  handleTimeChange(event: Event) {
    this.time$.next(Number((<HTMLInputElement>event.target).value) || 0)
  }

}
