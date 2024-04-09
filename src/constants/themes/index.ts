import {DefaultTheme} from 'styled-components/native';

export const LightTheme: DefaultTheme = {
  palette: {
    primaryColor: '#2F4153',
    secondaryColor: '#D25454',
    tertiaryColor: '#E0CCA1',

    surface1: '#E6E6E6B2',
    surface2: '#CACCCE80',
    surface3: '#282828',
    surface4: '#E6E6E6',

    greyTextLabel: '#86888A',
    fontIconColor: '#F6F6F6',
    fontIconBackgroundColor: '#F6F6F6',
    pageBackgroundColor: '#F6F6F6',

    gradientBgStart: '#385775',
    gradientBgEnd: '#19222B',

    loaderPrimary: '#385775',
    loaderSecondary: '#2F4149',

    modalBackdrop: '#0000007D',
  },
  typography: {
    title: {
      color: '#2F4153',
      fontFamily: 'Nunito-Bold',
      fontSize: 22,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    subtitle: {
      color: '#313335',
      fontFamily: 'Nunito-Bold',
      fontSize: 16,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    boldSubtitle: {
      color: '#86888A',
      fontFamily: 'Nunito-Bold',
      fontSize: 14,
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    p: {
      color: '#86888A',
      fontFamily: 'Nunito-Regular',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
    error: {
      color: '#D25454',
      fontFamily: 'Nunito-Regular',
      fontSize: 14,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  },
};
