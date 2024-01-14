import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  margin-top: 8px;
  padding: 8px;
`;

export const AboutTitle = styled.Text`
  ${({theme}) => theme.typography.subtitle};
`;

export const AboutContent = styled.Text`
  ${({theme}) => theme.typography.p};
  text-align: justify;
`;

export const ShowMore = styled(AboutContent)`
  text-decoration: underline;
  text-decoration-color: ${({theme}) => theme.palette.primaryColor};
  color: ${({theme}) => theme.palette.primaryColor};
  text-align: right;
`;

export const ShowMoreContainer = styled.Pressable`
  display: flex;
  width: 100%;
  margin-top: 8px;
`;
