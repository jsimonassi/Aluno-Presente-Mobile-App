export interface StudyClass {
  id: string;
  about: string;
  daysOfWeek: DayOfWeekStudyClass[];
  name: string;
  owner: string;
  period: string;
  isHappingNow?: boolean;
  teacher: StudyTeacher;
}

export interface DayOfWeekStudyClass {
  start: string;
  end: string;
}

interface StudyTeacher {
  email: string;
  name: string;
}
