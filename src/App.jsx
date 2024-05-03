import React from "react";
import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

import {
  H1,
  Container,
  Image,
  ContainerItems,
  Input,
  InputLabel,
  Button,
} from "./styles";

const App = () => {
  return (
    <Container>
      <Image alt="logo-Img " src={People}/>
      <ContainerItems>
      <H1>Hello!</H1>
      <InputLabel>Nome</InputLabel>
      <Input placeholder="Nome"/>
      <InputLabel>Idade</InputLabel>
      <Input placeholder="Idade"/>
      <Button>Cadastrar <img src={Arrow} alt="seta" /></Button>
      </ContainerItems>
    </Container>
  );
};

export default App;
