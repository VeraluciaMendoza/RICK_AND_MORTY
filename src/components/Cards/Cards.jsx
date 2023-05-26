import Card from '../Card/Card.jsx';
import styled from "styled-components";

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 2rem;
`

export default function Cards({ characters, onClose }) {
  return (
    <ContainerCards>
      {
        characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin.name}
              image={character.image}
              onClose={onClose}
            />
          )
        )
      }
    </ContainerCards>
  )
}
