import React, {useEffect, useState} from 'react';
import {
  AboutContent,
  AboutTitle,
  Container,
  ShowMore,
  ShowMoreContainer,
} from './styles';

export const About = ({aboutInfos}: {aboutInfos: string}) => {
  const [fullContentSelected, setFullContentSelected] = useState(false);
  const [content, setContent] = useState('');

  useEffect(() => {
    const filterContent = () => {
      if (aboutInfos.length > 256 && !fullContentSelected) {
        setContent(aboutInfos.slice(0, 256) + '...');
      } else {
        setContent(aboutInfos);
        setFullContentSelected(true);
      }
    };

    filterContent();
  }, [fullContentSelected, aboutInfos]);

  return (
    <Container>
      <AboutTitle>Sobre a disciplina:</AboutTitle>
      <AboutContent>{content}</AboutContent>
      {!fullContentSelected && (
        <ShowMoreContainer onPress={() => setFullContentSelected(true)}>
          <ShowMore>Mostrar mais</ShowMore>
        </ShowMoreContainer>
      )}
    </Container>
  );
};
