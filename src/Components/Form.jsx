import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const[userName, setUserName] = useState("");
  const[email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);



  const onChangeUserName = (e) => setUserName(e.target.value)
  const onChangeEmail = (e) => setEmail(e.target.value)

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!(validateUserName(userName) && validateEmail(email))) {
      setError("Por favor verifique su información nuevamente");
      return;
    }else{
    setError("");
    setSubmitted(true);
    alert(`Bienvenido: ${userName}`);
  };
  }

  const validateUserName = (userName) => {
    return userName.trim().length < 3 || /^\s/.test(userName);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };


  return (
    <div className = "App">
      <h3>Iniciar Sesión</h3>
      <form
      onSubmit = {onSubmitForm}
      >
      <input
        type = "text"
        placeholder = "Nombre de usuario"
        value = {userName}
        onChange = {onChangeUserName}
        />
        <input
        type = "text"
        placeholder = "email"
        value = {email}
        onChange = {onChangeEmail}
        />
        </form>
        {error && <p className="error">{error}</p>}
        {submitted && <p>Gracias: ${userName} te contactaremos cuando antes vía mail </p>}
    </div>
  );
};

export default Form;
