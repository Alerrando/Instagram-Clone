import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  Heart,
  PaperPlaneTilt,
  Smiley,
} from "phosphor-react";
import { storiesInfos } from "../Carrossel Stories";
import "./style.scss";

export function Feed() {
  console.log(storiesInfos);
  return (
    <>
      {storiesInfos.map((storie, index) => (
        index !== 0 ? (

          <div className="main-container-feed" key={index}>
            <header>
              <div className="header-info">
                <div className="feed-img">
                  <img
                    src={storiesInfos[index].url}
                    alt={`photo of ${storiesInfos[index].name}`}
                  />
                </div>

                <p>{storiesInfos[index].name}</p>
              </div>
              <DotsThree size={32} weight="bold" />
            </header>

            <main>
              <div className="main-feed-img">
                <img src={storiesInfos[index].feed.url} alt="" />
              </div>

              <div className="main-feed-icons">
                <div className="icons-interactions">
                  <Heart weight="bold" />
                  <ChatCircle weight="bold" />
                  <PaperPlaneTilt weight="bold" />
                </div>

                <BookmarkSimple weight="bold" />
              </div>
            </main>

            <footer>
              <div className="feed-likes">
                <div className="feed-imgs-infos">
                  <div className="infos-imgs">
                    <img
                      src="https://images.unsplash.com/photo-1661705969607-cde73828023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                      alt=""
                      className="infos-imgs-3"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1661600500531-aa1e8bd7cc11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80"
                      alt=""
                      className="infos-imgs-2"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1660866838212-df428c885827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                      alt=""
                      className="infos-imgs-1"
                    />
                  </div>
                  <p>
                    Liked by <a href="#">{storiesInfos[index].name}</a> and{" "}
                    <a href="#">by other poeple</a>
                  </p>
                </div>
                <div className="likes-infos">
                  <p>
                    <a href="#">{storiesInfos[index].name}</a> Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Inventore architecto
                    distinctio placeat reprehenderit tempora.
                  </p>
                  <p className="quantComment">See all 2 comments</p>
                  <span>
                    <a href="#" className="time">
                      {storiesInfos[index].feed.time} day ago
                    </a>
                    <a href="#">View translation</a>
                  </span>
                </div>
                <div className="comment">
                  <div className="comment-input">
                    <Smiley size={32} weight="bold" />
                    <input type="text" placeholder="Add a comment..." />
                    <a href="#">Publish</a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        ) : (
          null
        )
      ))}
    </>
  );
}
