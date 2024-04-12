export interface UserFrequencyData {
  [courseId: string]: UserFrequency;
}

export interface UserFrequency {
  updatedAt: string;
  frequency: Frequency[];
}

export interface Frequency {
  date: string;
  status: FrequencyStatus;
}

export type FrequencyStatus = 'Presente' | 'Faltou' | 'Não inscrito';
