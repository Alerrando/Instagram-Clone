import './style.scss';

export function Suggestion(){
    return(
        <main>
            <div className="main-info-container">
                <header className="suggestion">
                    <p>Suggestion for you</p>
                    <a href="#">See it all</a>
                </header>

                <main>
                    <div className='suggestion-img'>
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    </div>

                    <div className='suggestion-info'>
                        <p>Lorem ipsum dolor</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <a href="#">Follow</a>
                </main>

                <footer>

                </footer>
            </div>
        </main>
    )
}