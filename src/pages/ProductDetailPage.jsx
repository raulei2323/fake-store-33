import { useEffect, useState } from "react"
import { useParams } from "react-router-dom" 
import { getProduct } from "../api"
import { toast } from "sonner"
import useAuth from "../hooks/useAuth"

export default function ProductDetailPage () {
    useAuth()
    
    const { id } =useParams()
    const [ product, setProduct] = useState([])

    useEffect(() => {
        getProduct(id)
        .then((producto) => setProduct(producto))
        .catch((error) => {
            toast.error("error al cargar el producto")
                console.error("[getProduct]", error)
            
        })
    },[id])

    return (
        <main>
            <img src={product.thumbnail} alt={product.title} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </main>
    )
}

