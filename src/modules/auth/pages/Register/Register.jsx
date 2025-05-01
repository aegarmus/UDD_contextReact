import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/Register/RegisterForm"


export const RegisterPage = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2x1 font-bold mb-6 text-center text-gray-800">
                Registrate!
            </h2>

            <RegisterForm />
            <p className="mt-4 text-sm text-gray-600 text-center">
                Ya tienes una cuenta?{" "}
                <Link to='/login' className="text-blue-600 hover:underline">
                    Iniciar Sesión
                </Link>
            </p>
        </div>
    )
}