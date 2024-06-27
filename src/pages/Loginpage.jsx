import { useForm } from "react-hook-form"
import { login } from "../api"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import clsx from "clsx"


export default function LoginPage() {
    const navigate = useNavigate()
    const [ showPassword, setShowPassword] = useState(false)

const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
} = useForm()

async function onSubmit(data) {
    try {
        const token = await login(data.username, data.password)
        if(token){
            window.localStorage.setItem("token", token)
            toast.success("Bienvenido")
            navigate("/productos")

        }else {
            toast.error("Usuario o contrasena incorrectos")
            setError("root.credentials", { type: "manual", message: "Credenciales invalidas"})
        }
    } catch (error) {
        toast.error("Error al iniciar sesion")
        console.error("[login error]", error)
    }
}

function handleShowHidePassword (){
    if (showPassword == true) {
        setShowPassword(false)
    }else {
        setShowPassword(true)
    }

}

    return (

        <main className="flex justify-center items-center flex-col gap-4 w-full h-full">
        <h1 className="text-4xl font-bold text-center">Login </h1>
        <form
        onSubmit={handleSubmit(onSubmit)} 
        className={clsx("border border-white/50 rounded p-4 flex flex-col gap-4 max-w-sm w-full", 
            {
            "border-red-500": errors.root?.credentials,
        }
    )}
        >
            <input type="text"
            className="border border-white/50 rounded p-2" 
            placeholder="Nombre de usuario"
             { ...register("username", {
                required: { value: true, message: "Nombre de usuario requerido"}
            })} />
            <input type={ showPassword ? "text" : "password"}
            className="border border-white/50 rounded p-2"
            placeholder="Contrasena"
            {...register("password", {
                required: {
                    value: true,
                    message: "Contrasena requerida",
                }
            })} />
            <span 
            onClick={handleShowHidePassword} > {showPassword ? "ocultar constrasena" : "👁️ mostrar constrasena"}  </span>

            <button className="bg-teal-500 p-4 text-black hover:bg-teal-300">Ingresar</button>
            {errors.root?.credentials && (<p className="bg-red-500 text-center">Credenciales invalidas</p>) }
        </form>

        </main>
    )
}


//Punto de control 1111