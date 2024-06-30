import { useEffect } from "react"
import { useParams } from "react-router-dom" 

export default function ProductDetailPage () {
    const { id } =useParams()
    const [ product, setProduct] = useState([])

    useEffect(() => {
        //fecth product by id
    },[id])

    return (
        <main>
            <h1>Product Detail Page: {id} </h1>
        </main>
    )
}

