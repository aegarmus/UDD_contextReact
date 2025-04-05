import { useState } from "react"
import { loginService } from "../../services/authApiService";


export const LoginForm = () => {

    const [ correo, setcorreo ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = async(event) => {
        event.preventDefault();

        const formatData = {
            correo,
            password
        }

        try {
            const dataLogin = await loginService(formatData);
            console.log(dataLogin);


        } catch (error) {
            console.error(error);
            alert("Error al iniciar sesión");
        }
    }

    return(
        <form onSubmit={handleLogin}>
            <div>
                <label>Correo</label>
                <input 
                    type="email"
                    value={correo}
                    onChange={event => setcorreo(event.target.value)}
                    required 
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required 
                />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    )
}