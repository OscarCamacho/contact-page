import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export enum AppSections {
  ABOUT,
  SKILLS,
  EXPERIENCE,
  CONTACT_INFO
}

type DisplayMapping = {
  section: AppSections,
  subject: BehaviorSubject<boolean>
};

@Injectable({providedIn: "root"})
export class NavigationService {

  private readonly displayAbout = new BehaviorSubject(true);
  private readonly displaySkills = new BehaviorSubject(false);
  private readonly displayExperience = new BehaviorSubject(false);
  private readonly displayContactInfo = new BehaviorSubject(false);

  private readonly displayMap: DisplayMapping[] = [
    {section: AppSections.ABOUT, subject: this.displayAbout},
    {section: AppSections.SKILLS, subject: this.displaySkills},
    {section: AppSections.EXPERIENCE, subject: this.displayExperience},
    {section: AppSections.CONTACT_INFO, subject: this.displayContactInfo},
  ]

  getDisplayObservable (section: AppSections): BehaviorSubject<boolean> {
    return this.displayMap.find((mapping)=>mapping.section===section)!.subject;
  }

  displaySection (section: AppSections) {
    for (const mapping of this.displayMap) {
      if (mapping.section === section) {
        mapping.subject.next(true);
      } else {
        mapping.subject.next(false);
      }
    }
  }

}
