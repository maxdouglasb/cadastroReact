import React from "react";
import People from './assets/people.svg'

import {
  H1,
  Container,
  Image,
  ContainerItens,
  Input,
  InputLabel,
  Button,
} from "./styles";

const App = () => {
  return (
    <Container>
      <Image alt="logo-Img " src={People}/>
      <ContainerItens/>
      <H1>Hello!</H1>
      <InputLabel>Nome</InputLabel>
      <Input placeholder="Nome"/>
      <InputLabel>Idade</InputLabel>
      <Input placeholder="Idade"/>
      <Button>Cadastrar</Button>
    </Container>
  );
};

export default App;
