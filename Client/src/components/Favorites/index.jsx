import { connect, useDispatch } from "react-redux"
import { Card } from "../Card/Card";
import styled from "styled-components";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const ContainerFavorites = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 1rem 2rem;
`

const Favorites = ({ myFavorites, onClose }) => {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux)
  }

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  }

  return (
    <ContainerFavorites>
      <h1>My Favorites</h1>
      <select onChange={handleOrder}>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {
        myFavorites.map(fav => (
          <Card
            key={fav.id}
            id={fav.id}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin.name}
            image={fav.image}
            onClose={onClose}
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