import { useParams } from "react-router-dom" 

export default function ProductDetailPage () {
    const { id } =useParams()

    return (
        <main>
            <h1>Product Detail Page: {id} </h1>
        </main>
    )
}