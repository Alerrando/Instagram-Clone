import './style.scss';

const suggestionPeople = [
    {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'phote ????',
        follow: "Suggestion for you",
    },

    {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'phote ????',
        follow: "Followed by ????????",
    },

    {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'phote ????',
        follow: "Suggestion for you",
    },

    {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'phote ????',
        follow: "Suggestion for you",
    },

    {
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'phote ????',
        follow: "Suggestion for you",
    }
]

export function Suggestion(){
    return(
        <main>
            <div className="main-info-container">
                <header className="suggestion">
                    <p>Suggestion for you</p>
                    <a href="#">See it all</a>
                </header>

                <main>
                        {suggestionPeople.map((person, index) => (
                            <div className='main-container-suggestion'>
                                <div className='suggestion-img'>
                                    <img src={suggestionPeople[index].url} alt={suggestionPeople[index].name} />
                                </div>
            
                                <div className='suggestion-info'>
                                    <p>Lorem ipsum dolor</p>
                                    <p>{suggestionPeople[index].follow}</p>
                                </div>
            
                                <a href="#">Follow</a>
                            </div>
                        ))}
                </main>

                <footer>

                </footer>
            </div>
        </main>
    )
}