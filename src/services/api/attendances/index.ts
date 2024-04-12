import {Api} from '..';
import {AttendanceInProgressModel} from '../../../types/api/Attendance';

export const Attendances = {
  registerUserAttendance: (courseId: string, code: string) => {
    return new Promise<void>((resolve, reject) => {
      Api.resourceApi
        .put(`/attendances/courses/${courseId}/codes/${code}`)
        .then(() => {
          resolve();
        })
        .catch(error => {
          console.log('error', error);
          reject(error);
        });
    });
  },
  checkAttendanceInProgress: (courseId: string) => {
    return new Promise<AttendanceInProgressModel>((resolve, reject) => {
      Api.resourceApi
        .get(`/attendances/courses/${courseId}/actived`)
        .then(response => resolve(response.data))
        .catch(error => reject(error));
    });
  },
};
