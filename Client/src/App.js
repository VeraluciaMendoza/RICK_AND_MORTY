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
import Swal from "sweetalert2";
import Favorites from './components/Favorites';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  // const EMAIL = "veralucia@gmail.com";
  // const PASSWORD = "123456";

  function login(userData) {
    // if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate('/home');
    // } else {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'Algo salió mal la intentar ingresar'
    // //   })
    // }
  }

  function onSearch(id) {

    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      
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
          <Route path='/favorites' element={<Favorites/>} />
        </Routes>
      </div>
   );
}

export default App; 
