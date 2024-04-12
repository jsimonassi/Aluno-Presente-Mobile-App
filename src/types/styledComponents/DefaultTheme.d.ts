import 'styled-components/native';

type TypographyItem = Pick<
  CSSObject,
  'fontFamily' | 'fontStyle' | 'fontWeight' | 'fontSize' | 'color'
>;

declare module 'styled-components/native' {
  export interface DefaultTheme {
    palette: {
      primaryColor: string;
      secondaryColor: string;
      tertiaryColor: string;

      surface1: string;
      surface2: string;
      surface3: string;
      surface4: string;

      greyTextLabel: string;
      fontIconColor: string;
      fontIconBackgroundColor: string;
      pageBackgroundColor: string;

      gradientBgStart: string;
      gradientBgEnd: string;

      loaderPrimary: string;
      loaderSecondary: string;

      modalBackdrop: string;
    };
    typography: {
      title: TypographyItem;
      subtitle: TypographyItem;
      boldSubtitle: TypographyItem;
      p: TypographyItem;
      error: TypographyItem;
    };
  }
}
