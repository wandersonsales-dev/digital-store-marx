import { HiMenu } from "react-icons/hi";
import "./MainMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <button
        className="main-menu button-without-style"
        onClick={() => setShowContent(!showContent)}
      >
        <HiMenu style={{ fontSize: "2rem" }} />
      </button>
      {showContent && (
        <div className="content-menu">
          <div className="wrapper-menu">
            <h4 className="title">Páginas</h4>

            <ul>
              <li className="active">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Produtos</Link>
              </li>
              <li>
                <Link to={"/categories"}>Categorias</Link>
              </li>
              <li>
                <Link to={"/orders"}>Meus Pedidos</Link>
              </li>
            </ul>

            <div className="footer-main-menu">
              <button>Entrar</button>
              <Link>Cadastre-se</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
