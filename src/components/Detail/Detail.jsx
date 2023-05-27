import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components";

const ContainerDetail = styled.div`
  color: #44281d ;
  background-color: #abc984 ;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: 60%;
  margin: auto;
  border-radius: 20px;

  img {
    border-radius: 50%;
    width: 350px;
    height: 350px;
  }
`
const NameDetail = styled.h1`
  color: red;
  text-align: center;
  padding-bottom: 1rem;
`

export default function Detail() {
  const  { id } = useParams()
  const [character, setCharacter] = useState({})
  console.log(character)

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
    });
    return setCharacter({});
 }, [id]);

  return (
    <ContainerDetail>
      <div style={{ textAlign: 'center', width: '350px'}}>
        <NameDetail>{character.name}</NameDetail>
        <h2>STATUS: {character.status}</h2>
        <h2>GENDER: {character.gender}</h2>
        <h2>SPECIE: {character.species}</h2>
        <h2>ORIGIN: {character.origin?.name}</h2>
      </div>

      <div>
        <img src={character.image} alt="perfil"/>
      </div>
    </ContainerDetail>
  )
}