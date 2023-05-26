import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail/Detail'

function App() {
  const [characters, setCharacters] = useState([])
  console.log(characters, 'all')

  // const onSearch = (data) => {
  //  setCharacters([ ...characters, example ])
  // }

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      const exist = characters.find(character => character.id === data.id)

      if (exist) {
        window.alert('¡Ya existe el personaje con este ID!');
      } else {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
      }
    });
 }

 const onClose = (id) => {
   const filtro = characters.filter(character => character.id !== id)
   setCharacters( filtro)
 }

   return (
      <div className='App'>
        <Nav onSearch={onSearch}/>
        <hr/>
        <Routes>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </div>
   );
}

export default App; 
