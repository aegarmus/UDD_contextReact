import { Route, Routes } from "react-router-dom"
import { Navbar } from "../shared/components/Navbar/Navbar"
import { HomePage } from "../shared/pages/HomePage"
import { AboutPage } from "../shared/pages/AboutPage"
import { LoginPage } from "../modules/auth/pages/Login/Login"
import { RegisterPage } from "../modules/auth/pages/Register/Register"
import { ProductPage } from "../modules/products/pages/ProductPage"
import { MercadoPagoStatus } from "../modules/payments/components/MercadoPagoStatus"


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/mercadopago/status" element={<MercadoPagoStatus />} />
            </Routes>
        </>
    )
}