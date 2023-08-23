import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const newUser = {
    id: 1,
    name: 'Daniel',
    age: 30,
    email: 'daniel@google.com',
};

export const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={() => setUser(newUser)}
            >
                Establecer usuario
            </button>
        </>
    );
};
