import { Outlet } from "react-router-dom"
import "./Sobre.css"

export default function App(){
    return (
        <div className="App">
          <h1>Sobre</h1>
          <p>Explore uma lista de jogos com uma interface simples e intuitiva. Aqui, você pode visualizar rapidamente todos os jogos disponíveis, com informações básicas como nome, plataforma e gênero. 
            Nosso objetivo é fornecer uma experiência fácil e sem distrações, ideal para quem quer apenas encontrar o próximo jogo para jogar.
<br></br>
Funcionalidades:
<br></br>
Lista de Jogos: Veja todos os jogos disponíveis em um só lugar.
<br></br>
Filtro por Gênero e Plataforma: Encontre jogos de acordo com suas preferências de plataforma (PC, console, mobile) e gênero (ação, aventura, RPG, etc.).
Informações Essenciais: Cada jogo vem com informações rápidas como título, gênero e em quais plataformas está disponível.
<br></br>
Simples, rápido e eficiente. Sem complicações — apenas jogos!</p>
          <Outlet />
        </div>
      );
}