import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="descricao">
      
        Randomizer é um projeto criado pela turma 78 de WebDev da Ironhack de
        São Paulo, <p>é uma forma rápida e fácil de fazer sorteios aleatórios dos
        alunos.
      </p>
      </div>
      <a
        href= "https://github.com/Ironhack-SAO-PTWD-Jun-2022/randomizer"
        target="_blank"
      >
        <h3>REPOSITÓRIO RANDOMIZER</h3>
      </a>
    </div>
  );
};

export default Footer;
