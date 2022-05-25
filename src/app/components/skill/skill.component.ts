import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

export interface CategoryWithSkills {
  category: string;
  skills: Skill[];
}

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {

  readonly skills$: Observable<Skill[]> = this.skillService.skills;
  readonly categoriesWithSkills$: Observable<CategoryWithSkills[]> = this.skills$.pipe(
    map(skillList => {
      const res: CategoryWithSkills[] = [];
      for (const skill of skillList) {
        let categoryWithSkills = res.find(category => category.category === skill.category);
        if (!categoryWithSkills) {
          categoryWithSkills = {category: skill.category, skills: []};
          categoryWithSkills.skills.push(skill);
          res.push(categoryWithSkills);
        } else {
          categoryWithSkills.skills.push(skill);
        }
      }
      return res;
    }));

  constructor(private readonly skillService: SkillService) {}
}
