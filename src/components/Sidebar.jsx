import Avatar from "../img/FtPerfil.png";

import "../styles/components/sidebar.sass";
const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Alexandre Oliveira Marinho" />
        <p>imagem</p>
        <p className="title">Desenvolvedor Back-End</p>
        <p>redes sociais</p>
        <p>informações de contato</p>
        <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar