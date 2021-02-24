import React, { useEffect, useState } from "react";
import { FiGithub, FiCornerRightDown, FiHeart, FiStar } from "react-icons/fi";
import axios from "axios";

import { GlobalStyle, Template, Header, Content, List } from "./styles";

export default function App() {
  const [repositories, setRepositories] = useState([]);
  const [idName, setIdName] = useState('');

  async function handleRepository(e) {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/users/${idName}/repos`);
      setRepositories(response.data);
    } catch (err) {
      alert("Houve um erro, por favor, confira seu id do GitHub");
    };
  };

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo; //verificando se o id passando ao clicar no botão, é o mesmo id do repositório
    });

    setRepositories(newRepositories);
  };

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `GitRepo | Você têm ${filtered.length} favoritados`;
  }, [repositories]);

  return (
    <>
      <GlobalStyle />
        <Template>
          <Header>
            <div>
              <FiGithub color="#FFF" size={35} />
              <h2>GitRepo</h2>
            </div>
          </Header>
          <Content>
            <h1>Informe o seu usuário no <span>GitHub</span> para listar os seus repositórios</h1>
            <form onSubmit={handleRepository}>
              <input value={idName} onChange={e => setIdName(e.target.value)} type="text" placeholder="Usuário no GitHub" />
              <button type="submit">
                Listar
                <FiCornerRightDown style={{marginLeft: "1rem"}} color="#FFF" size={20} />
                </button>
            </form>  
          </Content>
          <List>
            {repositories.map(repo => (
              <li key={repo.id}>
                <div>
                  <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
                </div>
                <div>  
                  <h2>{repo.name}</h2>
                  <p>{repo.description}</p>
                  <p>{repo.private ? "Repo privado" : "Repo público"}</p>
                  <a href={repo.html_url} target="_blank">Ir ao repositório</a>
                  <span>{repo.favorite && <FiStar size={24} color="#FFFF00" />}</span>
                  <button
                    color="#F00" 
                    style={{cursor: "pointer"}} 
                    size={20}
                    onClick={() => handleFavorite(repo.id)}>{!repo.favorite ? (
                      <button>
                        <FiHeart
                          color="#F00" 
                          style={{cursor: "pointer"}} 
                          size={20}
                        />
                      </button> 
                    ) : <span>Desfavoritar</span>}
                  </button>
                </div>
              </li>
            ))};
          </List>
        </Template>
    </>  
  );
};