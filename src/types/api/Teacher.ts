export interface TeacherInfo {
  email: string;
  name: string;
  info: ApiTeacher;
}

interface ApiTeacher {
  about: string;
  contacts: Contact[];
}

export interface Contact {
  id: number;
  type: string;
  value: string;
}
