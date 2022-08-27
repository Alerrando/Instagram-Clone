import { User } from 'phosphor-react'
import { CarrosselStories } from './Carrossel Stories'
import './style.scss'

export function Main(){
    return(
        <main>
            <div className="main-container">
                <div className="stories-feed">
                    <CarrosselStories />
                </div>

                <div className="container-infos">
                    <header>
                        <div className="user">
                            <div className="outline"></div>
                            <User weight="bold" />
                        </div>

                        <div className="header-info">
                            <p>alerrandob</p>
                            <p>Alerrando Breno</p>
                        </div>

                        <a href="#">Mudar</a>
                    </header>
                </div>
            </div>
        </main>
    )
}