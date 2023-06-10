import { useState } from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  background-color: #454f38;
  padding: .8rem 1rem;
  width: 30rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  input {
    width: 50%;
    border: none;
    border-radius: 5px;
    padding: .5rem;
  }

  input:focus {
    border: none;
  }

  button {
    background-color: #f0e14a;
    color: #44281d;
    font-weight: bold;
    border: none;
    padding: .4rem .7rem;
    border-radius: 10px;
    cursor: pointer;
  }
`

export default function SearchBar(props) {
  const [id, setId] = useState('')

  const handleChange = (event) => {
    const { value } = event.target
    setId(value)
  }
   return (
      <SearchContainer>
         <input
          type='search'
          value={id}
          placeholder="Enter id ..."
          onChange={handleChange}/>
         <button onClick={() => props.onSearch(id)}>Agregar</button>
      </SearchContainer>
   );
}
