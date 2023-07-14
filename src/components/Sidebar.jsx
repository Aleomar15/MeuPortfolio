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
        <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar