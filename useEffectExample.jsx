import { useEffect, useState } from "react"

export default function ProductsPage() {
    const [count, setCount] = useState(0)

    //useEffect se ejecuta:
    //1 Al terminar de rendeizar el componente
    // Al cambiar algunas de sus dependencias

    //Recive 2 parametros
    //1 Una funcion a ejecutar
    //2 Un arreglo de dependencias

    //se ejecuta al terminar de renderizar el componente
    useEffect (() => {
        console.log("Termino la renderizacion")
    }, [])

    //se ejecuta al cambiar la dependencia count y al terminar de renderizar el componente
    useEffect(() => {
        console.log("useEffect count", count)
    })
//se ejecuta tambien cada que una dependencia cambia y como count es una dependencia cambia cada que cambia count
    useEffect(() => {
        console.log("Sin deps")
    })

    //loop infinito
    // useEffect(() => {
    //     setCount(count + 1)
    //     console.log("count infinito")
    // }, [count])
    return (
        //Boton de cuenta usa el useState de la linea 4 y las const
        <main>
            <button onClick={() => setCount(count + 1)}>count: {count}</button>
        </main>

)
}
