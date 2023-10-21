import { useContext } from "react";
import { UserContext } from "./context/index";

const newUser = {
  id: 123,
  name: 'Fernanda Cancino',
  email: 'fer@cancino.com',
}

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext );

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 3) }
      </pre>

      <button
        className="btn btn-primary"
        onClick={() => setUser(newUser)}
      >
        Establecer Usuario
      </button>
    </>
  )
}
