export interface UserFrequencyData {
  [courseId: string]: UserFrequency;
}

export interface UserFrequency {
  updatedAt: string;
  frequency: Frequency[];
}

interface Frequency {
  date: string;
  status: 'Presente' | 'Faltou' | 'Não inscrito';
}
