import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About'
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail'
import Form from './components/Form';
import Nav from './components/Nav/Nav';
import Introduction from './components/Introduction';
// import NotFound from './components/NotFound';
import Favorites from './components/Favorites';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(true);

  async function login(userData) {
    try {
      // const { email, password } = userData;
      // const URL = 'http://localhost:3001/rickandmorty/login/';
      // const { access } = (await axios(URL + `?email=${email}&password=${password}`)).data;
      // setAccess(access);
      // access && 
      navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
  }

  async function onSearch(id) {
    try {
      const URL = 'http://localhost:3001/rickandmorty/character/';
      // Evitar duplicados
      const characterId = characters.filter(character => character.id === id);
      // console.log(characterId)
      if (characterId.length) return alert("The character already exists!!!");
      if (id < 1 || id > 86) return alert("There is no character with the entered id!!!");

      const { data } = await axios.get(URL + id);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    } catch (error) {
      window.alert(error);
    }
 };

  const onClose = (id) => {
    console.log(id, 'llega el id?')
    setCharacters(characters.filter(character => character.id !== id))
  }

  useEffect(() => {
    !access && navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [access]);

   return (
      <div className='App'>
        {
          location.pathname !== '/'
          ? <Nav onSearch={onSearch}/>
          : null
        }
        <hr/>
        <Routes>
          <Route exact path='/' element={<Form login={login} />}/>
          <Route exact path='/introduction' element={<Introduction />}/>
          <Route path='/home' element=
            {
              characters.length
                ? <Cards characters={characters} onClose={onClose} numberOfCards={characters.length}/>
                : null
            }
          />
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
        </Routes>
      </div>
   );
}

export default App; 
