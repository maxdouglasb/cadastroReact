import React, { useState } from "react";
import People from "./assets/people.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  H1,
  Container,
  Image,
  ContainerItems,
  Input,
  InputLabel,
  Button,
  User,
} from "./styles";

const App = () => {
  // const users = [ ];
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const addUser = () => {
    setUsers([...users, { id: Math.random(), name, age }]);
  };
  const nameUsers = (event) => {
    setName(event.target.value);
  };
  const ageUsers = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Image alt="logo-Img " src={People} />
      <ContainerItems>
        <H1>Hello!</H1>
        <InputLabel>Nome</InputLabel>
        <Input onChange={nameUsers} placeholder="Nome" />
        <InputLabel>Idade</InputLabel>
        <Input onChange={ageUsers} placeholder="Idade" />

        <Button onClick={addUser}>
          Cadastrar <img src={Arrow} alt="seta" />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button>
                <img src={Trash} alt="Lixeira" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerItems>
    </Container>
  );
};

export default App;
