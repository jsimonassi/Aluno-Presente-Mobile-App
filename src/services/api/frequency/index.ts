import {Api} from '..';
import {Constants} from '../../../constants';
import {ApiFrequency} from '../../../types/api/Frequency';
import {UserFrequency} from '../../../types/app/frequency';

export const Frequency = {
  getUserFrequency: (courseId: string) => {
    return new Promise<UserFrequency>((resolve, reject) => {
      Api.resourceApi
        .get(`/frequencies/courses/${courseId}/member`)
        .then(response => {
          const frequency: UserFrequency = {
            updatedAt: new Date().toISOString(),
            frequency: response.data.map((item: ApiFrequency) => {
              const status =
                item.status === Constants.FREQUENCY.FREQUENCY_STATUS.PRESENT
                  ? 'Presente'
                  : item.status === Constants.FREQUENCY.FREQUENCY_STATUS.ABSENT
                  ? 'Faltou'
                  : 'Não inscrito';

              return {
                date: item.date,
                status,
              };
            }),
          };

          resolve(frequency);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
};
