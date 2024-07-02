import moment from 'moment';
import {StudyClass} from '../types/app/class';

const addIsNowInfoToClassList = (classList: StudyClass[]) => {
  const now = moment();
  return classList.map((studyClass: StudyClass) => {
    let isNow = false;
    studyClass.daysOfWeek.forEach(day => {
      let start = moment(day.start).set({
        year: now.year(),
        month: now.month(),
        date: now.date(),
      });
      let end = moment(day.end).set({
        year: now.year(),
        month: now.month(),
        date: now.date(),
      });
      if (now.isBetween(start, end)) {
        isNow = true;
      }
    });

    return {...studyClass, isHappingNow: isNow};
  });
};

export const DateHelper = {
  addIsNowInfoToClassList,
};
