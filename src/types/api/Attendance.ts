export interface AttendanceInProgressModel {
  status: 'STARTED' | 'STOPPED';
  type?: 'qrCode' | 'code';
}
