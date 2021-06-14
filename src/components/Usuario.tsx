import { useState } from "react";

interface IUser {
    uid: string;
    name: string;
}

export const Usuario = () => {

    const [user, setUser] = useState<IUser>({
        uid: '456',
        name: 'Andres'
    });

    const login = () => {
        setUser({
            uid: '123',
            name: 'Sebastian'
        });
    }

    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>

            <button
                onClick={login}
                className="btn btn-outline-primary">
                Login
            </button>
            <pre className="mt-2">{JSON.stringify(user, null, 3)}</pre>
        </div>
    )
}
