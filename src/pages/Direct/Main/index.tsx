import {
  CaretDown,
  ChatText,
  MagnifyingGlass,
  PaperPlaneTilt,
} from "phosphor-react";
import { useState } from "react";
import { storiesInfos } from "../../../components/Main/Carrossel Stories";
import { Modal } from "./Modal";
import "./style.scss";

const linkAPI =
  "https://api.unsplash.com/photos/random/?client_id=DE3PMxauanAnmkqPdXj8KMCyBOchgHxf4G140FaUq5E";

export function Main() {
  const [modalMessage, setModalMessage] = useState(false);

  return (
    <main className="main-direct">
      <header className="search-main mobile">
        <div className="search">
          <MagnifyingGlass size={24} weight="bold" />
          <input type="text" name="search" id="search" placeholder="Search" />
        </div>
      </header>
      <main className="container-message">
        <>
          <div>
            <div className="account-message desktop">
              <div></div>
              <div className="name-account">
                <h2 translate="no" className="h2">
                  alerrandob
                </h2>
                <CaretDown size={24} weight="bold" />
              </div>

              <ChatText onClick={() => setModalMessage(true)} size={28} weight="bold" />
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
            </div>
          </div>

          {modalMessage == true ? <Modal setModalMessage={setModalMessage} /> : null}
        </>
      </main>

      <aside className="container-aside desktop">
        <div className="aside-infos">
          <div className="rounded-aside">
            <PaperPlaneTilt size={64} weight="bold" />
          </div>

          <h2 className="h2">Your Messages</h2>

          <span>Send private photos and messages to a friend or group.</span>

          <button className="btn">Send Message</button>
        </div>
      </aside>
    </main>
  );
}
