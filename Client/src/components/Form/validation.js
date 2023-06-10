const validation = (data) => {
  const error = {};

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPassword = new RegExp("[0-9]");

  // email validation
  if (!regexEmail.test(data.email)) {
    error.email = 'Debe ingresar un email válido'
  }
  if (!data.email) {
    error.email = 'Debe ingresar un email'
  }
  if (data.email.length > 35) {
    error.email = 'El usuario no puede tener más de 35 caracteres'
  }
  // password validation
  if (!regexPassword.test(data.password)) {
    error.password = 'La contraseña tiene que tener al menos un número'
  }
  if (data.password.length < 6 || data.password.length > 10) {
    error.password = 'La contraseña debe tener entre 6 y 10 caracteres'
  }

  return error;
}

export default validation;