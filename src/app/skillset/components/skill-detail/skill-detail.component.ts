import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Skill} from 'src/app/base/entities/skill';
import {SkillbridgeService} from '../../skillbridge.service';

@Component({
    selector: 'app-skill-detail',
    templateUrl: './skill-detail.component.html',
    styleUrls: ['./skill-detail.component.css'],
})
export class SkillDetailComponent implements OnInit {
    private skill: Skill = undefined;

    constructor(
        private route: ActivatedRoute,
        private service: SkillbridgeService
    ) {}

    ngOnInit(): void {
        console.log('skill detail ngInit');
        let skillName = '';
        this.route.url.subscribe((url) => {
            skillName = url[1].path;
            console.log('route change', url);
            this.service.skill.subscribe((s: Skill) => {
                this.skill = s;
                console.log('skill change', this.skill);
            });
        });
    }

    get _skill(): Skill {
        return this.skill;
    }
}
