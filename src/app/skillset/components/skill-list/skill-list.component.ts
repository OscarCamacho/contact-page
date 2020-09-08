import {Component, OnInit} from '@angular/core';
import {Skill} from '../../../base/entities/skill';
import {Router} from '@angular/router';
import {SkillbridgeService} from '../../skillbridge.service';
import {Observable, of} from 'rxjs';

@Component({
    selector: 'app-skill-list',
    templateUrl: './skill-list.component.html',
    styleUrls: ['./skill-list.component.css'],
})
export class SkillListComponent implements OnInit {
    skillset: Skill[];
    skill: Skill;

    constructor(private service: SkillbridgeService, private router: Router) {}

    ngOnInit(): void {
        this.service.list.subscribe((res: Skill[]) => {
            this.skillset = res;
        });
    }

    selectSkill(skill: Skill): void {
        this.skill = skill;
        this.service.skill = of(this.skill || ({} as Skill));
        this.router.navigate([`/skill/detail/${skill.name}`]);
    }
}
