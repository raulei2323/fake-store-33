
import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div>
            <h1 className="text-4x1 font-bold text-center">Home Page</h1>
            <p className="text-center">This is the Home Page</p>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/productos/123">Producto 123</Link>
            </div>
        </div>
    )
}