export interface StudyClass {
  id: string;
  about: string;
  daysOfWeek: DayOfWeekStudyClass[];
  name: string;
  owner: string;
  period: string;
}

export interface DayOfWeekStudyClass {
  start: string;
  end: string;
}
