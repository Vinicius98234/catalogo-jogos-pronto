import { Outlet } from "react-router-dom"
import './NotFound.css'

export default function App(){
    return (
        <div className="Error">
        <h1>Error 404</h1>
        <h2>Página não encontrada...</h2>
        <a className="BotaoVoltar" href="javascript:history.back()">Voltar</a>
        <Outlet />
        </div>
    )
}