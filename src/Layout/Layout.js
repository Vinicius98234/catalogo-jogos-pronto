import { Link, Outlet } from "react-router-dom"

export default function App(){
    return (
        <div className="App">
          <div className="Link">
            <Link to="/">Catálogo</Link>
            <Link to="sobre">Sobre</Link>
          </div>
          <Outlet />
        </div>
      );
}

