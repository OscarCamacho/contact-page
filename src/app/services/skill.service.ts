import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SKILLS } from "../constants/skills";
import { Skill } from "../model/skill";


@Injectable({providedIn: "root"})
export class SkillService {

  getSkills (): Observable<Skill[]> {
    return of(SKILLS);
  }

}
