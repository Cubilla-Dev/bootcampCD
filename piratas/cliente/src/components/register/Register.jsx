import { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('url', {
                first: first,
                last: last,
                email: email,
                password: password,
                confirm: confirm
            });

            console.log('Registro exitoso', response.data);
        } catch (error) {
            console.error('Error al registrar:', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <label>First Name:</label>
                <input value={first} onChange={(e) => setFirst(e.target.value)} />
                <label>Last Name:</label>
                <input value={last} onChange={(e) => setLast(e.target.value)} />
                <label>Email:</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
                <label>Confirm Password:</label>
                <input value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
