import { connect } from "react-redux"
import { Card } from "../Card/Card";
import styled from "styled-components";
import { filterCards, orderCards } from "../../redux/actions";

const ContainerFavorites = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 2rem;
`

const Favorites = (props) => {
  console.log(props, 'favor')
  return (
    <ContainerFavorites>
      <h1>My Favorites</h1>
      <select>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <select>
      <option value="Male">Male</option>
      <option value="Male">Female</option>
      <option value="Male">Genderless</option>
      <option value="Male">unknown</option>
      </select>
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
            onClose={props.onClose(fav.id)}
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