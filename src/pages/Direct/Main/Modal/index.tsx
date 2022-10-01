import { X } from "phosphor-react";
import { useState } from "react";
import { storiesInfos } from "../../../../components/Main/Carrossel Stories";
import "../NewMessage/style.scss";
import "./style.scss";
import "../NewMessage/style.scss"

type ModalProps = {
  setModalMessage: (validation: boolean) => void;
};

export function Modal(props: ModalProps) {
  const [search, setSearch] = useState("");
  const [add, setAdd] = useState<any[]>([]);

  const searchFor = storiesInfos.filter((storie) =>
    Object.values(storie.name)
      .join("")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="modal">
      <div className="modal-container">
        <header className="header-modal-header">
          <div className="container-header">
            <X
              size={24}
              weight="bold"
              onClick={() => props.setModalMessage(false)}
            />

            <h2 className="h2" translate="no">
              New Message
            </h2>

            <span translate="no">Chat</span>
          </div>
        </header>

        <main>
          <div className="search-new-message">
            <label translate="no">For:</label>
            <div className="search-people">
              <>
                {add.length !== 0 ? (
                  <div className="selected-people">
                    {add.map((people, index) => (
                      <div
                        className="name-people"
                        onClick={() => deletePeople(add[index].name)}
                      >
                        <span>{add[index].name}</span>
                        <X size={18} weight="bold" />
                      </div>
                    ))}
                  </div>
                ) : null}

                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                  onChange={(e) =>
                    setSearch((e.target as HTMLInputElement).value)
                  }
                />
              </>
            </div>
          </div>

          <div className="stories-container">
            <h2 className="h2">Suggestions</h2>
            {searchFor.map((storie, index) =>
              searchFor[index].name !== "My Story" ? (
                <div className="infos-storie">
                  <div className="stories" key={index}>
                    <div className="stories-img">
                      <img src={searchFor[index].url} alt="" />
                    </div>

                    <p translate="no" className="name-storie">
                      {searchFor[index].name}
                      <span>Online 14h</span>
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    name=""
                    id=""
                    onClick={() =>
                      addNewMessagePeople(searchFor[index].name, index)
                    }
                  />
                </div>
              ) : null
            )}
          </div>
        </main>
      </div>
    </div>
  );

  function searchPeople(namePeople: string) {
    let aux: number = 0;

    add.forEach((people) => {
      if (people.name == namePeople) aux = -1;
    });

    return aux;
  }

  function addNewMessagePeople(namePeople: string, index: number) {
    const check = searchPeople(namePeople);

    if (check >= 0) {
      const aux = {
        name: namePeople,
      };

      setAdd([...add, aux]);
    } else {
      deletePeople(namePeople);
    }
  }

  function deletePeople(namePeople: string) {
    let indexPeople = 0;
    add.forEach((people, index) => {
      if (people.name == namePeople) indexPeople = index;
    });
    const arrayAux = [...add];
    arrayAux.splice(indexPeople, 1);
    setAdd(arrayAux);
  }
}
