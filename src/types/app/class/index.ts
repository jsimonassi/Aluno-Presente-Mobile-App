export interface StudyClass {
  id: string;
  about: string;
  daysOfWeek: DayOfWeekStudyClass[];
  name: string;
  owner: string;
  period: string;
  isHappingNow?: boolean;
}

export interface DayOfWeekStudyClass {
  start: string;
  end: string;
}
