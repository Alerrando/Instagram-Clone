import { CaretDown, ChatText, MagnifyingGlass } from "phosphor-react";
import { storiesInfos } from "../../../components/Main/Carrossel Stories";
import "./style.scss";

export function Main() {
  return (
    <main>
      <header className="search-main mobile">
        <div className="search">
          <MagnifyingGlass size={24} weight="bold" />
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
      </header>
      <main className="container-message">
        <div className="account-message desktop">
          <div></div>
          <div className="name-account">
            <h2 translate="no">alerrandob</h2>
            <CaretDown size={24} weight="bold"/>
          </div>
          <ChatText size={28} weight="bold" />
        </div>
        <div className="stories-feed direct">
          <div className="stories-container">
            {storiesInfos.map((storie, index) =>
              index !== 0 ? (
                <div className="stories" key={index}>
                  <div className="online"></div>
                  <div className="stories-img">
                    <img src={storiesInfos[index].url} alt="" />
                  </div>

                  <p translate="no" className="name-storie">
                    {storiesInfos[index].name}
                    <span>Online 14h</span>
                  </p>
                </div>
              ) : null
            )}
          </div>

          <div>
            
          </div>
        </div>
      </main>
    </main>
  );
}
