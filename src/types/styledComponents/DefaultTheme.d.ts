import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    palette: {
      primaryColor: string;
      secondaryColor: string;
      tertiaryColor: string;

      surface1: string;
      surface2: string;
      surface3: string;

      greyTextLabel: string;
      fontIconColor: string;
      fontIconBackgroundColor: string;
      pageBackgroundColor: string;

      gradientBgStart: string;
      gradientBgEnd: string;

      modalBackdrop: string;
    };
  }
}
