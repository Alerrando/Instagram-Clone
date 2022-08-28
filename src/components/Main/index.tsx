import { CarrosselStories } from "./Carrossel Stories";
import { Feed } from "./Feed";
import { InfosMain } from "./Infos Main";
import { Suggestion } from "./Suggestion";
import "./style.scss";

export function Main() {
  return (
    <main>
      <div className="main-container">
        <div>
          <div className="stories-feed">
            <CarrosselStories />
          </div>
          <Feed />
        </div>

        <div className="container-infos">
          <InfosMain />
          <Suggestion />
        </div>
      </div>
    </main>
  );
}
