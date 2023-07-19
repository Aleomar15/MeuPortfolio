import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/FtPerfil.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
        <img src={Avatar} alt="Alexandre Oliveira Marinho" />
        <p className="title">Desenvolvedor Back-End</p>
       <SocialNetworks/>
       <InformationContainer/>
        <a href="../curriculum/Alexandre_Oliveira_Marinho.pdf" className="btn" download>Download Currículo</a>
    </aside>
  )
}

export default Sidebar