import {Api} from '..';
import {TeacherInfo} from '../../../types/api/Teacher';

export const Teacher = {
  getTeacher: (teacherEmail: string) => {
    return new Promise<TeacherInfo>((resolve, reject) => {
      Api.resourceApi
        .get(`/users/${teacherEmail}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
