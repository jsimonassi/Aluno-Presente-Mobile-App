import React from 'react';
import {ArrowImage, ContentContainer, ItemText, RowItem} from './styles';
import {assets} from '../../assets';

interface ListSelectorProps {
  items: string[];
  onSelect: (item: string, index: number) => void;
}

export const ListSelector = ({items, onSelect}: ListSelectorProps) => {
  return (
    <ContentContainer>
      {items.map((item, index) => (
        <RowItem
          key={index}
          onPress={() => onSelect(item, index)}
          isTheLast={index === items.length - 1}>
          <ItemText>{item}</ItemText>
          <ArrowImage source={assets.general.goForwardIcon} />
        </RowItem>
      ))}
    </ContentContainer>
  );
};
