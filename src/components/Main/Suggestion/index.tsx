import "./style.scss";

const suggestionPeople = [
  {
    url: "https://images.unsplash.com/photo-1661065266388-fa817d6d7d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
    name: "Melvin Ramirez",
    follow: "Suggestion for you",
  },

  {
    url: "https://images.unsplash.com/photo-1661546820803-a30a643279e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "George Salazar",
    follow: "Followed by ####"
  },

  {
    url: "https://images.unsplash.com/photo-1661540020819-095b5f9c1ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Rachel Burch",
    follow: "Suggestion for you",
  },

  {
    url: "https://images.unsplash.com/photo-1660974739683-34d9e120c305?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Robert Boyd",
    follow: "Suggestion for you",
  },

  {
    url: "https://images.unsplash.com/photo-1661543035218-4a83d8d85e9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Rhonda Walls",
    follow: "Suggestion for you",
  },
];

export function Suggestion() {
  return (
    <main>
      <div className="main-info-container">
        <header className="suggestion">
          <p>Suggestion for you</p>
          <a href="#">See it all</a>
        </header>

        <main>
          {suggestionPeople.map((person, index) => (
            <div className="main-container-suggestion" key={index}>
              <div className="suggestion-img">
                <img
                  src={suggestionPeople[index].url}
                  alt={`photo of ${suggestionPeople[index].name}`}
                />
              </div>

              <div className="suggestion-info">
                <p>{suggestionPeople[index].name}</p>
                <p>{suggestionPeople[index].follow}</p>
              </div>

              <a href="#">Follow</a>
            </div>
          ))}
        </main>

        <footer>
          <nav>
            <div>
                <a href="">
                  <span>Sobre</span>
                </a>
                <a href="">
                  <span>Ajuda</span>
                </a>
                <a href="">
                  <span>Imprensa</span>
                </a>
                <a href="">
                  <span>API</span>
                </a>
                <a href="">
                  <span>Carreiras</span>
                </a>

                <a href="">
                  <span>Privacidade</span>
                </a>
            </div>
            <div>
                <a href="">
                  <span>Termos</span>
                </a>
                <a href="">
                  <span>Locazação</span>
                </a>
                <a href="" className="a9">
                  <span>Idioma</span>
                </a>
            </div>
          </nav>
        </footer>
      </div>
    </main>
  );
}
