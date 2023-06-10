// import { ButtonCard, ContainerCard, NameCard, StatusCard } from "./card.styled";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const ContainerCard = styled.div`
  background-color: #97ce4c;
  color: #44281d;
  border-radius: 15px;
  overflow: hidden;
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.4);
  cursor: default;
  transition: all 400ms ease;
  position: relative;
  font-size: 12px;
  padding-bottom: .5rem;

  img {
    width: 100%;
    height: 300px;
    border-radius: 15px;
  }

  :hover {
    box-shadow: 5px 5px 20px rgba(0,0,0,0.6);
    transform: translateY(-3%);
  }
`
const ButtonCard = styled.button`
  background-color: #97ce4c;
  border: none;
  color: #44281d;
  font-weight: bold;
  border-radius: 50%;
  display: block;
  width: 25px;
  height: 25px;
  font-size: 14px;
  position: absolute;
  right: 5px;
  top: 5px;
  
  &:hover {
    background-color: red;
    color: white;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.6);
    cursor: pointer;
  }
`
const NameCard = styled.h2`
  background-color:	#f0e14a;
  border-radius: 0 0 20px;
  width: 80%;
  color: black;
  bottom: 154px;
  right: 0;
  padding: .3rem 1rem;
  box-shadow: 1px 1px 15px rgba(0,0,0,0.4);
`
const StatusCard = styled.h2`
  width: 70px;
  height: 25px;
  border: none;
  background-color: red;
  padding: .1rem .6rem;
  border-radius: 20px 0 0;
  color: white;
  font-weight: 400;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export function Card(props) {
  console.log(props, 'propsss')
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props)
    }
  }

  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [props.myFavorites]);

  return (
    <>
    {
      isFav ? (
          <button onClick={handleFavorite}>❤️</button>
      ) : (
          <button onClick={handleFavorite}>🤍</button>
      )
    }
      <ContainerCard>
        <ButtonCard onClick={() => props.onClose(props.id)}>X</ButtonCard>
        <img src={props.image} alt='Imagen' />
        <Content>
          <Link to={`/detail/${props.id}`}>
            <NameCard>{props.name}</NameCard>
          </Link>
          <StatusCard>{props.status}</StatusCard>
          {/* <h2>{props.gender}</h2>
          <h2>{props.origin}</h2> */}
        </Content>
         
         {/* <div> 
            <StatusCard>{props.status}</StatusCard>
            <div>
              <h2>{props.sppecies}</h2>
              <h2>{props.gender}</h2>
              <h2>{props.origin}</h2>
            </div>
          </div> */}
      </ContainerCard>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (fav) => {dispatch(addFav(fav))},
    removeFav: (id) => dispatch(removeFav(id))
  }
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)