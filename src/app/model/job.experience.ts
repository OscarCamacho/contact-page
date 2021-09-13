import { LogoOrientation } from "./logo.orientation";

export interface JobExperience {
  readonly roleName: string;
  readonly organization: string;
  readonly orgUrl?: string;
  readonly startDate: Date;
  readonly endDate?: Date;
  readonly description?: string;
  readonly roles: string[];
  readonly technologyStack: string[];
  readonly achievements?: string[];
  readonly logo?: string;
  readonly logoOrientation?: LogoOrientation;
}
