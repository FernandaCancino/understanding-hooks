// import { useState } from "react";
import { useForm } from "../Hooks";

export const TodoAdd = ({ onNewTodo }) => {

  // sin utilizar el hook del formulario
  // const [inputTodo, setInputTodo] = useState('');

  // const onInputChange = ({target}) => {
  //   setInputTodo(target.value);
  // }

  // utilizando el hook del formulario
  const { inputTodo, onInputChange, onResetForm } = useForm({ inputTodo: ''})

  const onSubmitForm = (e) => {
    e.preventDefault();
    if( inputTodo.trim().length <= 1) return;
    onNewTodo({
      id: crypto.randomUUID(),
      todo: inputTodo,
      done: false,
    })
    // setInputTodo('');
    onResetForm();
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
        onChange={onInputChange}
        name="inputTodo"
      />
      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      > Agregar </button>
    </form>
  )
}
