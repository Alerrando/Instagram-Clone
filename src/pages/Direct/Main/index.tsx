import { MagnifyingGlass } from "phosphor-react";
import './style.scss';

export function Main() {
  return (
    <main>
      <div className="search-main mobile">
        <div className="search">
            <MagnifyingGlass size={24} weight="bold" />
            <input type="text" name="search" id="search" placeholder="Search" />
        </div>
      </div>
    </main>
  );
}
