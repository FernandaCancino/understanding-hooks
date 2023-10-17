import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    console.log('inputRef: ', inputRef);
    inputRef.current.select();
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder='ingrese su nombre'
        className='form-control'
      />
      <input
        type="text"
        placeholder='ingrese su apellido'
        className='form-control mt-2'
      />
      <button className="btn btn-primary mt-2" onClick={onClick}>Set Focus</button>
    </>
  )
}
