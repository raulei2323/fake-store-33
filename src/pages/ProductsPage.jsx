import { useEffect, useState } from "react";
import { getProducts } from "../api";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);

  //const token = useAuth()
  useAuth()

  useEffect(() => {
    getProducts()
      .then((prods) => {
        setProducts(prods);
      })
      .catch((error) => {
        toast.error("Error al obtener los productos");
        console.error("[getProducts error]", error);
      });
  }, []);

  return (
    <main className='p-4'>
      <h1 className='text-4xl font-semibold text-center'>Productos</h1>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {products.map((product, idx) => {
          return (
            <article
              key={`prod-${idx}`}
              className='hover:bg-white/10 cursor-pointer rounded p-4 flex flex-col justify-between'
            >
              <img src={product.thumbnail} alt={product.title} />
              <p className='text-lg text-center'>{product.title}</p>
              <Link
                to={`/productos/${product.id}`}
                className='bg-white/50 w-full p-2 rounded text-center'
              >
                Ver detalle
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
