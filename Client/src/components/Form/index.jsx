import { useState } from "react";
import styled from "styled-components";
import validation from "./validation";

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 80vh;
  padding: 1.5rem;
  background-color: lightgrey;
  border-radius: 10px;
  color: black;
  font-weight: bold;

  img {
    border-radius: 50%;
    width: 350px;
    height: 350px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.4);
  }

  button {
    background-color: #f0e14a;
    color: #44281d;
    font-weight: bold;
    font-size: 16px;
    border: none;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    width: 275px;
    box-shadow: 0px 1px 10px rgba(0,0,0,0.4);
    margin-top: 1rem;
  }

  p {
    margin: 0;
    font-size: 12px;
    text-align: left;
    color: red;
  }
`
const FormGroup = styled.div`
  position: relative;
  color: #B3B3B3;
  width: 50%;
  margin-bottom: 1rem;
`
const FormLabel = styled.label`
  color: #666666;
  /* cursor: pointer; */
  position: absolute;
  top: 0;
  left: 14px;
  transform: translateY(10px);
  transition: transform .5s, color .3s;
`
const FormInput = styled.input`
  width: 100%;
  font-size: 1rem;
  color: #666666;
  padding: .6em .7em;
  outline: none;
  border: 1px solid #B3B3B3;
  border-radius: 4px;
  background-color: lightgrey;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.4);

  &:focus {
    border: 2px solid #B3B3B3;
  }

  &:focus + ${FormLabel},
  &:not(:placeholder-shown) + ${FormLabel} {
    transform: translateY(-10px) scale(.7);
    transform-origin: top left;
    color: #666666;
    font-weight: 700;
    /* background-color: white; */
    background-color: lightgrey;
    padding: 0 .5rem;
  }
`

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value
    })
    setErrors(validation({
      ...userData,
      [name]: value
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  }

  return (
    <div style={{ display: "flex", justifyContent: 'center', marginTop: '3rem'}}>
      <Formulario onSubmit={handleSubmit}>
        <img src="https://wallpapers.com/images/hd/rick-and-morty-coming-out-of-portal-8rc57d4ds44gqzau.webp" alt="imagen"/>

        <FormGroup style={{ marginTop: '2rem'}}>
          <FormInput
            placeholder=' '
            type='email'
            id='email'
            name='email'
            value={userData.email}
            onChange={handleChange}
          />
          <FormLabel htmlFor='email'>EMAIL</FormLabel>
        <p>{ errors.email ? errors.email : null }</p>
        </FormGroup>

        <FormGroup >
          <FormInput
            placeholder=' '
            type='password'
            id='password'
            name='password'
            value={userData.password}
            onChange={handleChange}
          />
          <FormLabel htmlFor='password'>PASSWORD</FormLabel>
          <p>{ errors.password ? errors.password : null }</p>
        </FormGroup>

          <button onClick={handleSubmit} type="submit">SUBMIT</button>
      </Formulario>
    </div>
  )
}

export default Form;