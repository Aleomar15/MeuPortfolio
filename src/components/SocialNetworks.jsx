import {FaLinkedinIn, FaGithub} from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks =[
    { name: "linkedin", icon: <FaLinkedinIn /> },
    { name: "github", icon: <FaGithub /> },
];



const SocialNetworks = () => {
  const getLink = (name) => {
    const links = {
      linkedin: "https://www.linkedin.com/in/alexandre-oliveira-marinho-b64a54229/",
      github: "https://github.com/Aleomar15",
    };

    return links[name] || "#"; // Retorna "#" se o nome não for encontrado nos links
  };
    return (
      <section id="social-networks">
        {socialNetworks.map((network) => (
          <a
            href={getLink(network.name)}
            className="social-btn"
            id={network.name}
            key={network.name}
          >
            {network.icon}
          </a>
        ))}
      </section>
    );
  };

export default SocialNetworks;