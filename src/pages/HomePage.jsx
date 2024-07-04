
import clsx from "clsx"
import PageSection from "../components/PageSection"


export default function HomePage() {
    return (
        <div>
            <h1 className="text-4x1 font-bold text-center">Home Page</h1>
            <p className="text-center">This is the Home Page</p>
            <PageSection title="Un titulo">
                <h2>Vendemos de todo</h2>
            </PageSection>
            <PageSection title="Una imagen"
            className={clsx("bg-pink-600")}
            contentClassname="bg-teal-300"
            >
                <div className="w-full grid grid-cols-2 gap-2">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKGCvZq8Um6PEvrjjk6Z1I9vCkNx5kTNrUdA&s" alt="" />
                    <p>Hola soy un texto</p>
                </div>
            </PageSection>
        </div>
    )
}