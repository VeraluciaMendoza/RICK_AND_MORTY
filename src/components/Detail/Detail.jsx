import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ContainerDetail } from "./detail.styled"

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
      <h1>{character.name}</h1>
      <h2>STATUS | {character.status}</h2>
      <h2>GENDER | {character.gender}</h2>
      <h2>SPECIE | {character.species}</h2>
      <h2>ORIGIN | {character.origin?.name}</h2>
      <img src={character.image} alt="perfil"/>
    </ContainerDetail>
  )
}