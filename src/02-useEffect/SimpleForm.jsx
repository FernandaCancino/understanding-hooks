import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: '',
    email: '',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  useEffect(() => {

  }, [formState]);

  useEffect(() => {

  }, [email]);


  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        name="username"
        placeholder='Username'
        className='form-control'
        onChange={onInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder='email@algo.com'
        className='form-control mt-2'
        onChange={onInputChange}
      />
      {
        username === 'strider2' && <Message/>
      }
    </>
  )
}
