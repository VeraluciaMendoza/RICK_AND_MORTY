import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ButtonNavbar = styled.button`
  background-color: #e4a788;
  color: #44281d;
  font-weight: bold;
  border: none;
  padding: .5rem 1.5rem;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 1px 1px 10px rgba(255, 253, 253, 0.4);
  transition: all 400ms ease;

  :hover {
    box-shadow: 5px 5px 20px rgba(0,0,0,0.6);
    transform: translateY(-3%);
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`
const ButtonRandom = styled.button`
  background-color: red;
  color: white;
  font-weight: bold;
  border: none;
  padding: .5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
`

export default function Nav (props) {
  const randomNumber = Math.floor(Math.random() * 100)

  return (
    <NavBarContainer>
      <Buttons>
        <NavLink to={'/about'}>
          <ButtonNavbar>About</ButtonNavbar>
        </NavLink>
        <NavLink to={'/home'}>
          <ButtonNavbar>Home</ButtonNavbar>
        </NavLink>
      </Buttons>

      <SearchBar onSearch={props.onSearch}/>
      <ButtonRandom onClick={() => props.onSearch(randomNumber)}>Random</ButtonRandom>
    </NavBarContainer>
  )
}