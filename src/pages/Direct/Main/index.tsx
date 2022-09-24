import { MagnifyingGlass } from "phosphor-react";
import { storiesInfos } from "../../../components/Main/Carrossel Stories";
import "./style.scss";

export function Main() {
  return (
    <main>
      <div className="search-main mobile">
        <div className="search">
          <MagnifyingGlass size={24} weight="bold" />
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
      </div>
      <div className="stories-feed direct">
        <div className="stories-container">
          {storiesInfos.map((storie, index) => (
            index !== 0 ? (
              <div className="stories" key={index}>
                <div className="online"></div>
                <div className="stories-img">
                  <img src={storiesInfos[index].url} alt="" />
                </div>

                <p translate="no" className="name-storie">
                  {storiesInfos[index].name}
                </p>
              </div>
            ) :(
              null
            )
          ))}
        </div>
      </div>
    </main>
  );
}
