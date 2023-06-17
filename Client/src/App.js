import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail/Detail'
// import NotFound from './components/NotFound';
import Form from './components/Form';
import Favorites from './components/Favorites';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  // const EMAIL = "veralucia@gmail.com";
  // const PASSWORD = "123456";

  async function login(userData) {
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const { email, password } = userData;
      const response = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = response.data;
      setAccess(response.data);
      access && navigate('/home');
    } catch (error) {
      console.log(error.message);
    }
 }

  async function onSearch(id) {
    const URL = 'http://localhost:3001/rickandmorty/character/';
    try {
      const response = await axios.get(URL + id);
      const exist = characters.find(character => character.id === response.data.id);
      if (exist) {
        window.alert('¡Ya existe el personaje con este ID!');
      } else {
        if (response.data.name) {
          setCharacters((oldChars) => [...oldChars, response.data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    } catch (error) {
      window.alert(error);
    }

    // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      
    //   const exist = characters.find(character => character.id === data.id)
      
    //   if (exist) {
    //     window.alert('¡Ya existe el personaje con este ID!');
    //   } else {
    //     if (data.name) {
    //       setCharacters((oldChars) => [...oldChars, data]);
    //    } else {
    //       window.alert('¡No hay personajes con este ID!');
    //    }
    //   }
    // });
 }

  const onClose = (id) => {
    const filtro = characters.filter(character => character.id !== id)
    setCharacters( filtro)
  }

  useEffect(() => {
    !access && navigate('/');
 }, [navigate, access]);

   return (
      <div className='App'>
        {
          location.pathname !== '/'
          ? <Nav onSearch={onSearch} access={setAccess}/>
          : null
        }
        <hr/>
        <Routes>
          <Route exact path='/' element={<Form login={login} />}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
        </Routes>
      </div>
   );
}

export default App; 
