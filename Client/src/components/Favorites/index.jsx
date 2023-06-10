import { connect } from "react-redux"
import { Card } from "../Card/Card";
import styled from "styled-components";

const ContainerFavorites = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 2rem;
`

const Favorites = (props) => {
  return (
    <ContainerFavorites>
      {
        props.myFavorites.map(fav => (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin.name}
            image={fav.image}
            // onClose={onClose}
          />
        ))
      }
    </ContainerFavorites>
  )
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites);