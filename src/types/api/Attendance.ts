export interface AttendanceInProgressModel {
  status: 'STARTED' | 'STOPPED' | 'NOT_STARTED';
  origin: 'STATIC' | 'QR_CODE';
  location?: {
    latitude: number;
    longitude: number;
  };
}
