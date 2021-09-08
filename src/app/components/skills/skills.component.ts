import { Component } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import { AppSections, NavigationService } from 'src/app/services/navigation.service';
import { LogoOrientation, Skill, SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  readonly display$ = this.navService.getDisplayObservable(AppSections.SKILLS);

  readonly skills$ = this.skillService.getSkills();
  readonly selectedSkill$ = new Subject<Skill>();

  constructor(private readonly navService: NavigationService,
    private readonly skillService: SkillService) {
      this.skills$.subscribe((skills)=> this.selectedSkill$.next(skills[0]));
    }

  selectSkill (skill: Skill) {
    this.selectedSkill$.next(skill);
  }

  resolveSkillListIconClass (orientation: LogoOrientation): string {
    return `${this.resolveLogoClass(orientation)}Icon`
  }
  resolveSkillLogoClass (orientation: LogoOrientation): string {
    return `${this.resolveLogoClass(orientation)}Logo`
  }
  resolveSubSkillLogoClass (orientation: LogoOrientation): string {
    return `${this.resolveLogoClass(orientation)}LogoSmall`
  }
  resolveLogoClass (orientation: LogoOrientation): string {
    let res = "";
    switch(orientation) {
      case LogoOrientation.LANDSCAPE:
        res = "landscape";
        break;
      case LogoOrientation.PORTRAIT:
        res = "portrait";
        break;
      case LogoOrientation.SQUARE:
        res = "square";
        break;
    }
    return res;
  }

}
