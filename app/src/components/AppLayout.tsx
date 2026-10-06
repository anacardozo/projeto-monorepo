import { Outlet, Link } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-slate-800">Sistema Web</span>
        <nav className="flex gap-4 text-sm font-medium text-slate-600">
          <Link to="/dashboard" classname="hover:text-blue-600">
            Painel
          </Link>
          <Link to="/perfil" classname="hover:text-blue-600">
            Perfil
          </Link>
        </nav>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto p-6">
        {/* As rotas filhas serão renderizadas aqui */}
        <Outlet />
      </main>
    </div>
  );
}
