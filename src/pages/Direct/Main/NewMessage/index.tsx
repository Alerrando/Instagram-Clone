import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { storiesInfos } from "../../../../components/Main/Carrossel Stories";
import "./style.scss";

export function NewMessage() {
  const [search, setSearch] = useState("");
  const [add, setAdd] = useState<any[]>([]);

  const procurar = storiesInfos.filter((storie) =>
    Object.values(storie.name)
      .join("")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

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
          <div className="search-people">
            <>
                {add.map((people, index) => (
                    add[index].name
                ))}

                <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
                />
            </>
          </div>
        </div>

        <div className="stories-container">
          {procurar.map((storie, index) =>
            procurar[index].name !== "My Story" ? (
              <div className="infos-storie">
                <div className="stories" key={index}>
                  <div className="stories-img">
                    <img src={procurar[index].url} alt="" />
                  </div>

                  <p translate="no" className="name-storie">
                    {procurar[index].name}
                    <span>Online 14h</span>
                  </p>
                </div>

                <input
                  type="checkbox"
                  name=""
                  id=""
                  onClick={() => addNewMessagePeople(procurar[index].name, index)}
                />
              </div>
            ) : null
          )}
        </div>
      </main>
    </>
  );

  function searchPeople(namePeople:string){
    let aux:number = 0;

    add.forEach(people => {
        if(people.name == namePeople)
            aux = -1;
    })

    return aux;
  }

  function addNewMessagePeople(namePeople: string, index:number) {
    const verificar = searchPeople(namePeople)
    
    if(verificar >= 0)
    {
      const aux = {
        name: namePeople,
        };
    
        setAdd([...add, aux]);
    }
    else{
      deletePeople(namePeople);
    }

  }

  function deletePeople(namePeople:string){
    let indexPeople = 0;
    add.forEach((people, index) => {
        if(people.name == namePeople)
          indexPeople = index;
    })
    console.log(indexPeople - 1, namePeople,add)
    const arrayAux = [...add];
    arrayAux.splice(indexPeople, 1);
    setAdd(arrayAux);
  }
}