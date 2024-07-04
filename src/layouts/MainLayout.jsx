import { Link, useNavigate, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Home", authRequired: false },
  { to: "/productos", label: "Productos", authRequired: true },
  { to: "/login", label: "Login", authRequired: false }
];

export default function MainLayout() {
  const navigate = useNavigate();
  const isAuth = !!localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <main>
      <nav className='bg-white/50 flex flex-row justify-around text-lg p-1 font-semibold'>
        {links.map((link) => {
          if (link.authRequired && !isAuth) return null;
          if (isAuth && link.to === "/login") return null;
          return (
            <Link
              key={`link-${link.to}`}
              to={link.to}
              className='hover:bg-black/50 w-full text-center p2 cursosr-pointer'
            >
              {link.label}
            </Link>
          );
        })}
        {isAuth && (
          <button
          onClick={handleLogout} 
          className='hover:bg-black/50 w-full text-center p2 cursosr-pointer'>
            Salir
          </button>
        )}
      </nav>
      <Outlet />
      <footer className='w-full bg-teal-600 text-center text-black'>
        Este es el footer
      </footer>
    </main>
  );
}
