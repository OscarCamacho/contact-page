export interface ProfessionalExperience {
  readonly id: number;
  readonly roleTitle: string;
  readonly company: string;
  readonly achievements: string[];
  readonly startDate: Date;
  readonly endDate?: Date;
  readonly duration: string;
}
