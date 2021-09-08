import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { Skill } from 'src/app/model/skill';
import { AppSections, NavigationService } from 'src/app/services/navigation.service';
import { SkillService } from 'src/app/services/skill.service';
import { LogoOrientation, resolveLogoClass } from 'src/app/model/logo.orientation';

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
    return `${resolveLogoClass(orientation)}Icon`
  }
  resolveSkillLogoClass (orientation: LogoOrientation): string {
    return `${resolveLogoClass(orientation)}Logo`
  }
  resolveSubSkillLogoClass (orientation: LogoOrientation): string {
    return `${resolveLogoClass(orientation)}LogoSmall`
  }
}
