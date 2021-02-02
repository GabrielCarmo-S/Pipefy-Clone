import React from 'react';

import { Container, Label } from './styles';

function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer a migração de servidor</p>
      <img src="https://avatars.githubusercontent.com/u/70289493?s=400&u=fc746782a5b5df1517f6d8c448fbe612c452d020&v=4" alt="" />
    </Container>
  );
}

export default Card;