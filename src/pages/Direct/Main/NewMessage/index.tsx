import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { storiesInfos } from "../../../../components/Main/Carrossel Stories";
import "./style.scss";

export function NewMessage() {
    const [search, setSearch] = useState("");

    const procurar = storiesInfos.filter((storie) => Object.values(storie.name)
    .join("")
    .toLowerCase()
    .includes(search.toLowerCase()))

  return (
    <>
      <header className="newMessage-header">
        <div className="container-header">
          <div className="title-newMessage">
            <Link to="/direct">
              <ArrowLeft size={32} weight="bold" />
            </Link>

            <h2 className="h2">New Message</h2>
          </div>

          <span>Chat</span>
        </div>
      </header>

      <main>
        <div className="search-new-message">
          <label>Para</label>
          <input type="text" name="search" id="search" placeholder="Search" onChange={e => setSearch((e.target as HTMLInputElement).value)} />
        </div>

        <div className="stories-container">
          {procurar.map((storie, index) =>
            procurar[index].name !== "My Story" ? (
              <div className="stories" key={index}>
                <div className="online"></div>
                <div className="stories-img">
                  <img src={procurar[index].url} alt="" />
                </div>

                <p translate="no" className="name-storie">
                  {procurar[index].name}
                  <span>Online 14h</span>
                </p>
              </div>
            ) : null
          )}
        </div>
      </main>
    </>
  );
}
