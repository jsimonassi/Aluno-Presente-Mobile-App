import styled from 'styled-components/native';

export const ContentContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({theme}) => theme.palette.surface1};
  border-radius: 24px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const RowItem = styled.TouchableOpacity<RowItemProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom-width: ${({isTheLast}) => (isTheLast ? 0 : 1)}px;
  border-bottom-color: ${({theme}) => theme.palette.surface2};
`;

interface RowItemProps {
  isTheLast: boolean;
}

export const ItemText = styled.Text`
  ${({theme}) => theme.typography.p};
  color: ${({theme}) => theme.palette.primaryColor};
`;

export const ArrowImage = styled.Image`
  width: 10px;
  height: 20px;
`;
