import { useFetch, useCounter } from "../Hooks/";
import { Character, LoadingCharacter } from "./index";

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { state: { data, isLoading, hasError } } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
  const { name, gender, status } = !!data && data;

  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <hr />
      {
        isLoading
        ? <LoadingCharacter />
        : <Character name={name} gender={gender} status={status}/>
      }

      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment()}
      > Next character</button>
    </>
  )
}
