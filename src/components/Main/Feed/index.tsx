import "./style.scss";
import { storiesInfos } from "../Carrossel Stories";
import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  Heart,
  PaperPlaneTilt,
} from "phosphor-react";

export function Feed() {
  return (
    <div className="main-container-feed">
      <header>
        <div className="header-info">
          <div className="feed-img">
            <img src={storiesInfos[1].url} alt="" />
          </div>

          <p>Sara Wild</p>
        </div>
        <DotsThree size={32} weight="bold" />
      </header>

      <main>
        <div className="main-feed-img">
          <img
            src="https://images.unsplash.com/photo-1660856514115-3e6d43e51021?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
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
          <div className="likes-imgs">
            <img
              src="https://images.unsplash.com/photo-1661705969607-cde73828023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
              alt=""
              className="likes-imgs-3"
            />
            <img
              src="https://images.unsplash.com/photo-1661600500531-aa1e8bd7cc11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80"
              alt=""
              className="likes-imgs-2"
            />
            <img
              src="https://images.unsplash.com/photo-1660866838212-df428c885827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="likes-imgs-1"
            />
          </div>
            <p>Liked by <a href="#">{storiesInfos[1].name}</a> and <a href="#">by other poeple</a></p>
        </div>
      </footer>
    </div>
  );
}
