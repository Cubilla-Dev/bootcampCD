import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('tu-url-de-login', {
                email: email,
                password: password
            });

            console.log('Inicio de sesión exitoso', response.data);
            // Puedes realizar acciones adicionales después del inicio de sesión exitoso
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            // Puedes manejar el error y mostrar mensajes de error al usuario
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <label>Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
