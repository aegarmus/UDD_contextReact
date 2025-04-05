import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";


export const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const [ correo, setcorreo ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(event) => {
        event.preventDefault();

        const formatData = {
            correo,
            password
        }

        try {
            await login(formatData);
            navigate('/');
            
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