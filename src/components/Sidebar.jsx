import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/FtPerfil.png";

import "../styles/components/sidebar.sass";
const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Alexandre Oliveira Marinho" />
        <p className="title">Desenvolvedor Back-End</p>
       <SocialNetworks/>
        <p>informações de contato</p>
        <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar