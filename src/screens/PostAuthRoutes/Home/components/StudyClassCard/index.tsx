import React from 'react';
import {
  CardContainerStyled,
  HappingNowTextStyled,
  SubtitleStyled,
  TeacherNameStyled,
  TitleStyled,
} from './styles';
import {DayOfWeekStudyClass, StudyClass} from '../../../../../types/app/class';
import {Pressable, View} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import {Helpers} from '../../../../../helpers';

interface OwnProps {
  currentStudyClass: StudyClass;
  isHappingNow?: boolean;
  onPress: () => void;
}

export const StudyClassCard = ({
  currentStudyClass,
  onPress,
  isHappingNow = false,
}: OwnProps) => {
  const formatClassTime = (dayOfWeekStudyClass: DayOfWeekStudyClass[]) => {
    let timeMap: {[key: string]: string[]} = {};

    dayOfWeekStudyClass.forEach(day => {
      let start = moment(day.start).format('HH:mm');
      let end = moment(day.end).format('HH:mm');
      let dayOfWeek = moment(day.start).format('dddd');
      dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
      dayOfWeek = dayOfWeek.replace('-feira', '');
      let timeKey = `${start}-${end}`;

      if (timeMap[timeKey]) {
        timeMap[timeKey].push(dayOfWeek);
      } else {
        timeMap[timeKey] = [dayOfWeek];
      }
    });

    let output = '';
    if (Object.keys(timeMap).length === 1) {
      let timeKey = Object.keys(timeMap)[0];
      let days = timeMap[timeKey].join(' e ');
      let [start, end] = timeKey.split('-');
      output = `${days}, das ${start}h às ${end}h`;
    } else {
      output = Object.keys(timeMap)
        .map(timeKey => {
          let days = timeMap[timeKey].join(' e ');
          let [start, end] = timeKey.split('-');
          return `${days} das ${start}h às ${end}h`;
        })
        .join(', ');
    }

    return output;
  };

  return (
    <Pressable
      onPressIn={() => Helpers.Feedbacks.triggerFeedback('impactLight')}
      onPress={onPress}>
      <CardContainerStyled isHappingNow={isHappingNow}>
        <View>
          <TitleStyled isHappingNow={isHappingNow}>
            {currentStudyClass.name}
          </TitleStyled>
          <SubtitleStyled isHappingNow={isHappingNow}>
            {formatClassTime(currentStudyClass.daysOfWeek)}
          </SubtitleStyled>
          <TeacherNameStyled isHappingNow={isHappingNow}>
            {currentStudyClass.teacher.name}
          </TeacherNameStyled>
        </View>
        {isHappingNow && (
          <HappingNowTextStyled>
            O registro de frequência iniciará em breve
          </HappingNowTextStyled>
        )}
      </CardContainerStyled>
    </Pressable>
  );
};
