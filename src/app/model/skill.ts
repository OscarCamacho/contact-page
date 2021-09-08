import { LogoOrientation } from "./logo.orientation";
import { ProficiencyLevel } from "./proficiency.level";

export interface Skill {
  readonly name: string;
  readonly logoPath: string;
  readonly logoOrientation: LogoOrientation;
  readonly description?: string;
  readonly proficiency: ProficiencyLevel | string;
  readonly yearsOfExperience: number;
  readonly frameworks?: Skill[];
}
