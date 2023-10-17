import { useState } from "react";
import { useRef } from "react"
import { useLayoutEffect } from "react"

export const Character = ({name, gender, status}) => {

  const [boxSize, setboxSize] = useState({width: 0, height: 0});
  const pRef = useRef();

  useLayoutEffect(() => {
    // console.log( pRef.current.getBoundingClientRect() );
    const {height, width} = pRef.current.getBoundingClientRect();
    setboxSize({height, width})
  }, [name])

  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{display: 'flex'}}
      >
        <p ref={pRef} className="mb-1"> {name} </p>
        <footer className="blockquote-footer"> {gender} - {status} </footer>
      </blockquote>

      <code>
        { JSON.stringify(boxSize) }
      </code>
    </>
  )
}