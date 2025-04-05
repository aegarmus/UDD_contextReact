import { useReducer } from "react"
import { authReducer } from "./authReducer"
import { loginService } from "../services/authApiService";
import { AuthContext } from "./AuthContext";


const initialState = {
    user: null,
    token: null
}


export const AuthProvider = ({ children }) => {

    const [ state, dispatch ] = useReducer(authReducer, initialState);

    //Crear los métodos para modificar el estado global a traves del dispatch
    const login = async({ correo, password }) => {
        try {
            const dataLogin = await loginService({ correo, password });
            const { token } = dataLogin;
            const user = dataLogin.data; 

            //Guardar el token en localStorage -> Logica de sesión
            if(!token || !user) {
                throw new Error("No se pudo iniciar sesión");
            }

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));

            dispatch({
                type: 'LOGIN',
                payload: { user, token }
            });

        } catch (error) {
            console.error("Error logging in:", error);
            throw new Error(error);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        dispatch({
            type: 'LOGOUT'
            
        })
    }

    /* const globalState = {
        user: state.user,
        token: state.token,
        login
    } */

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}