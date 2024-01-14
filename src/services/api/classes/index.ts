import {Api} from '..';
import {Helpers} from '../../../helpers';
import {StudyClass} from '../../../types/app/class';

export const Classes = {
  getMyClasses: (): Promise<StudyClass[]> => {
    return new Promise((resolve, reject) => {
      Api.resourceApi
        .get('/courses/member')
        .then(response => {
          resolve(Helpers.DateHelper.addIsNowInfoToClassList(response.data));
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
