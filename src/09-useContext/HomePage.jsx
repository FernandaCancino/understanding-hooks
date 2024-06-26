import { useContext } from "react";
import { UserContext } from "./context/index";

export const HomePage = () => {

  const { user } = useContext( UserContext );

  return (
    <>
      <h1>HomePage { user?.name }</h1>
      <hr />

      <pre aria-label="pre">
        { JSON.stringify(user, null, 3) }
      </pre>
    </>
  )
}
