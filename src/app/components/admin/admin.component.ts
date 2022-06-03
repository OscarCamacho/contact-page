import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { BasicInfo } from 'src/app/model/basic.info';
import { ProfessionalExperience } from 'src/app/model/professional.experience';
import { Skill } from 'src/app/model/skill';
import { BasicInfoService } from 'src/app/services/basic.info.service';
import { ProfessionalExperienceService } from 'src/app/services/professional-experience.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  readonly adminLoggedIn$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true); //TODO: change to false

  readonly basicInfo$: Observable<BasicInfo> = this.basicInfoService.basicInfo;
  readonly basicInfoForm: FormGroup = this.formBuilder.group({
    displayName: this.formBuilder.control(''),
    fullName: this.formBuilder.control(''),
    displayTitle: this.formBuilder.control(''),
  });

  readonly experiences$: Observable<ProfessionalExperience[]> =
    this.experienceService.experiences;
  readonly experiencesFormGroup: FormGroup = this.formBuilder.group({
    experiences: this.formBuilder.array([]),
  });

  readonly skills$: Observable<Skill[]> = this.skillsService.skills;
  readonly skillsFormGroup: FormGroup = this.formBuilder.group({
    skills: this.formBuilder.array([]),
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly basicInfoService: BasicInfoService,
    private readonly experienceService: ProfessionalExperienceService,
    private readonly skillsService: SkillService
  ) {
    this.basicInfo$.subscribe((basicInfo) => {
      this.basicInfoForm.controls['displayName'].setValue(
        basicInfo.displayName
      );
      this.basicInfoForm.controls['fullName'].setValue(basicInfo.fullName);
      this.basicInfoForm.controls['displayTitle'].setValue(
        basicInfo.displayTitle
      );
    });

    this.experiences$.subscribe((experiences) =>
      experiences.forEach((experience) =>
        this.experiencesFormArray.push(
          this.buildExperienceFormGroup(experience)
        )
      )
    );

    this.skills$.subscribe((skills) =>
      skills.forEach((skill) =>
        this.skillsFormArray.push(this.buildSkillFormGroup(skill))
      )
    );
  }

  get experiencesFormArray(): FormArray {
    return this.experiencesFormGroup.get('experiences') as FormArray;
  }

  getExperienceFormGroup(index: number) {
    return this.experiencesFormArray.at(index) as FormGroup;
  }

  private buildExperienceFormGroup(experience: ProfessionalExperience) {
    return this.formBuilder.group({
      roleTitle: this.formBuilder.control(experience.roleTitle),
      company: this.formBuilder.control(experience.company),
      achievements: this.formBuilder.array(
        experience.achievements.map((achievement) =>
          this.formBuilder.control(achievement)
        )
      ),
      startDate: this.formBuilder.control(experience.startDate),
      endDate: this.formBuilder.control(experience.endDate),
    });
  }

  get skillsFormArray(): FormArray {
    return this.skillsFormGroup.get('skills') as FormArray;
  }

  getSkillFormGroup(index: number) {
    return this.skillsFormArray.at(index) as FormGroup;
  }

  private buildSkillFormGroup(skill: Skill) {
    return this.formBuilder.group({
      displayName: this.formBuilder.control(skill.displayName),
      yearsOfExperience: this.formBuilder.control(skill.yearsOfExperience),
      proficiency: this.formBuilder.control(skill.proficiency),
      category: this.formBuilder.control(skill.category),
    });
  }
}
