import {Injectable} from '@angular/core';
import {EnvironmentService} from '../base/services/environment.service';
import {Skill} from '../base/entities/skill';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SkillbridgeService {
    private _skill: Skill;
    private _list: Skill[];

    constructor(private envService: EnvironmentService) {
        envService
            .getValue('skillset')
            .subscribe((list: Skill[]) => (this._list = list));
    }

    public get list(): Observable<Skill[]> {
        return of(this._list);
    }

    public get skill(): Observable<Skill> {
        return of(this._skill);
    }
    public selectSkill(s: Skill): void {
        this._skill = s;
    }
}
