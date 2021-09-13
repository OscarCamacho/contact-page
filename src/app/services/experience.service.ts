import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { EXPERIENCES } from "../constants/experiences";
import { JobExperience } from "../model/job.experience";

@Injectable({providedIn: "root"})
export class ExperienceService {

  private readonly experiences$ = of(EXPERIENCES);

  getExperiencesNames (): Observable<string[]> {
    return this.experiences$.pipe(map(xps => xps.map((v)=>v.roleName)));
  }

  getExperienceFromIndex (index: number): Observable<JobExperience> {
    return this.experiences$.pipe(map(xps=>xps[index]));
  }

}
