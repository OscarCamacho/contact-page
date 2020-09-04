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
    private skill: any;

    constructor(
        private route: ActivatedRoute,
        private service: SkillbridgeService
    ) {}

    ngOnInit(): void {
        console.log('skill detail ngInit');
        this.route.url.subscribe((url) => {
            this.skill = url[1].path;
            console.log('route change', url, this.skill);
        });
        // this.service.skill.subscribe((s: Skill) => (this.skill = s));
    }

    get _skill(): Skill {
        return this.skill;
    }
}
