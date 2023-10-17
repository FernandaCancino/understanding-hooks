import { useState, useEffect } from 'react'
import { useForm } from '../Hooks/useForm';

export const FormWithCustomHook = () => {

  const { username, email, password, onInputChange, onResetForm} = useForm({
    username: '',
    email: '',
    password: '',
  });

  return (
    <>
      <h1>Formulario WithCustomHook</h1>
      <hr />
      <input
        type="text"
        name="username"
        placeholder='Username'
        className='form-control'
        onChange={onInputChange}
        value={ username }
      />
      <input
        type="email"
        name="email"
        placeholder='email@algo.com'
        className='form-control mt-2'
        onChange={onInputChange}
        value={ email }
      />
      <input
        type="password"
        name="password"
        placeholder='Contraseña'
        className='form-control mt-2'
        onChange={onInputChange}
        value={ password }
      />
      {
        username === 'strider2' && <Message/>
      }
      <button
        className='btn btn-primary mt-2'
        onClick={onResetForm}
      >Borrar</button>
    </>
  )
}
